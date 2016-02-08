import React from 'react';
import { Component } from 'react';
import { } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Blogger</h1>
        {this.props.children}
      </div>
    );
  }
}
