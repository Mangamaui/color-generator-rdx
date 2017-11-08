import React from 'react';
import './App.css';

import InputPanel from './components/InputPanel';
import ColorGroup from './components/ColorGroup';

import { connect } from 'react-redux';

class App extends React.Component {

  render() {

    const LIST = this.props.list.slice(-3).map(function(item, index) {
        return <ColorGroup key={index} color={item.color} amount={item.amount} steps={item.steps} />;
    });

    return (
      <div className="App">
        <header>
          <h1>Color Generator</h1>
        </header>

        <InputPanel />
        <div className="results">
          {LIST}
        </div>
      </div>
    );
  }
}

export default connect(function(state) {
  return {
    list: state.colors.collection
  };
})(App);
