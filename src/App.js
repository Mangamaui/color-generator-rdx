import React, { Component } from 'react';
import './App.css';

import InputPanel from './components/InputPanel';
import ColorGroup from './components/ColorGroup';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {list: [] };
    this.handleInputPanelSubmit = this.handleInputPanelSubmit.bind(this);
  }

  handleInputPanelSubmit(obj) {
    this.setState(
      {list: this.state.list.concat([obj])}
    );

  }

  render() {

    const LIST = this.state.list.reverse().map(function(item, index) {
        return <ColorGroup key={index} color={item.color} amount={item.amount} steps={item.steps} />;
    });

    return (
      <div className="App">
        <header>
          <h1>Color Generator</h1>
        </header>

        <InputPanel onPanelSubmit={this.handleInputPanelSubmit} />
        <div className="results">
          {LIST}
        </div>
      </div>
    );
  }
}

export default App;
