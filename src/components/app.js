import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Blogger</h1>
      {this.props.children}
      </div>
    );
  }
}
