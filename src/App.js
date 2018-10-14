import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { action } from './actions/text.action';

class App extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.text
});

const mapDispatchToProps = {
  onUpdateText: action
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
