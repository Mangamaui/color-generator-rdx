import React from 'react';
import ColorBox from './ColorBox';

import COLOR from '../lib/color';


class ColorGroup extends React.Component {

    generateNewGroup () {
        let amount = this.props.amount;
        let steps = this.props.steps;
        let hexColor = this.props.color;

        const HSL = COLOR.convertHexToHSL(hexColor);
        amount = parseInt(amount, 10);
        steps = parseInt(steps, 10);

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
