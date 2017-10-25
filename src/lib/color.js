const COLOR = {
    selection: '',

    convertHexToRGB: function(HEX) {
        const R = HEX >> 16;
        const G = HEX >> 8 & 0xFF;
        const B = HEX & 0xFF;
        
        return [R,G,B];
    },

    convertRGBtoHSL: function(RGB) {
        //convert RGB values to 255
        for(let i = 0; i < RGB.length; ++i) {
            RGB[i] = (RGB[i]/255);
        }

        //determine lowest value of RGB (Red, Green and Blue)
        const MIN = RGB.reduce(function(a, b) {
        return Math.min(a, b);
        });

        //determine highest value of RGB (Red, Green and Blue)
        const MAX = RGB.reduce(function(a, b) {
        return Math.max(a, b);
        });

        let luminace = (MAX + MIN) / 2;

        let saturation = COLOR.calculateSaturation(MIN, MAX, luminace);

        let hue = COLOR.calculateHue(RGB, MIN, MAX);

        //convert luminace to percentage
        luminace = Math.floor(luminace*100);

        return [hue, saturation, luminace];
    },

    calculateSaturation: function (MIN, MAX, luminace) {
        let result = null;

        if (MIN != MAX) {
            if(luminace < 0.5) {
                result = (MAX-MIN)/ (MAX+MIN);
            } else {
                result = (MAX-MIN)/(2.0-MAX-MIN);
            }
        } 

        //convert saturation to percentage
        return Math.floor(result *100);
    },

    calculateHue: function(RGB, MIN, MAX) {
        //lookup index of max color value
        const INDEX = RGB.findIndex(function(clr){
            return clr == MAX;
        });

        let hue = 0;

        //Select algorithm according to max value
        switch(INDEX) {
            case 0:
                //Red is max
                hue = (RGB[1] - RGB[2]) / (MAX-MIN);
            break;

            case 1:
                //Green is max
                hue = 2.0 + (RGB[2]-RGB[0]) / (MAX-MIN);
            break;
            
            case 2:
                //Blue is max
                hue = 4.0 + (RGB[0]-RGB[1]) / (MAX-MIN);
            break;
        }

        //Convert Hue to degrees
        hue = Math.floor(hue * 60);

        //make sure hue is not negative
        if(hue < 0) hue +=360;

        return hue;
    },

    convertHexToHSL: function(selectedColor) {
        const HEX = COLOR.prepareHexForConversion(selectedColor);
        const RGB = COLOR.convertHexToRGB(HEX);
        return COLOR.convertRGBtoHSL(RGB);
    },

    prepareHexForConversion: function(selectedColor) {
        selectedColor = selectedColor.replace("#", "").toLowerCase();
        const HEX = parseInt(selectedColor, 16); 
        return HEX;
    },
}

export default COLOR;