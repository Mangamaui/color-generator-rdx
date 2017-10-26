import React from 'react';

class ColorBox extends React.Component {
    render() {
        return(
            <div className="ColorBox" style={{backgroundColor: this.props.color}}>
                <p>#{this.props.color}</p>
            </div>
        );
    }
}

export default ColorBox;