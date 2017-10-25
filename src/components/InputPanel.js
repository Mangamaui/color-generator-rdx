import React, { Component } from 'react';

const DEFAULTS = {
            color: '#ff0000',
            amount: 2,
            steps: 5
        };

class InputPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...DEFAULTS };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Select a color: &nbsp; 
                    <input className="input__color" type="color" name="color" defaultValue={DEFAULTS.color} onChange={this.handleInputChange}/>
                </label>
                <label>Choose amount of variations: &nbsp;
                    <input className="input__amount" type="number" max="9" min="0" name="amount" defaultValue={DEFAULTS.amount} onChange={this.handleInputChange}/>
                </label>
                <label>Add the step size: &nbsp;
                    <input className="input__steps" type="number" max="50" min="5" name="steps" defaultValue={DEFAULTS.steps} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );   
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name);

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        this.props.onPanelSubmit(this.state);
        event.preventDefault();
    }
}

export default InputPanel;