import React from 'react';
import ColorBox from './ColorBox';

import COLOR from '../lib/color';


class ColorGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    generateNewGroup () {
        let amount = this.props.amount;
        let steps = this.props.steps;
        let hexColor = this.props.color;

        console.log("amount " + amount, "steps " + steps);
        const HSL = COLOR.convertHexToHSL(hexColor);
        amount = parseInt(amount);
        steps = parseInt(steps);

        let luminace = (HSL[2] - (amount*steps));
        const GROUP = [];
        
        for(let i = 0; i <= (amount*2); ++i) {
            GROUP.push(<ColorBox key={i+1} color={`hsl(${HSL[0]}, ${HSL[1]}%, ${luminace}%)`} />);
            luminace+=steps;
        }

        return GROUP;
    }

    render() {
        const GROUP = this.generateNewGroup();

        return (
            <div className="ColorGroup">
                {GROUP}
            </div>
        );
    }


}

export default ColorGroup;