import React, { Component } from 'react'

class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Welcome to TeamplayMe</h1>
        <h2>{this.props.creator}</h2>
      </div>
    )
  }
}

export default Hello

