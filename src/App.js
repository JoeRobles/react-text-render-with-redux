import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { action } from './actions/text.action';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    this.props.onUpdateText(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateText} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = {
  onUpdateText: action
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
