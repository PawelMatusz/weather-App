import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Result from './Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
