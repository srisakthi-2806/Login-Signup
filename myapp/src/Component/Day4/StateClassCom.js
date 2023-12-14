import React, { Component } from 'react'

export default class StateClassCom extends Component {
    state={
        color:"Pink",
        price:121
    }
    handleChange=()=>{this.setState({color:"Red",price:"220"})}
  render() {
    return (
      <div>
        <h1>The color is {this.state.color} the price is {this.state.price}</h1>
        <button onClick={this.handleChange}>Click me</button>
      </div>
    )
  }
}