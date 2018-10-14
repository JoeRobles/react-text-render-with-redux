import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('props: ', this.props);
    return (
      <div></div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.text
});

export default connect(mapStateToProps)(App);
