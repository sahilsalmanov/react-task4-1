import React, { Component } from 'react'
import './App.css'


class App extends Component {
  click = (event) => {
    console.log('Button click');
    }
  render() {
    return (
     <button onClick={this.click}> Click</button>
    )
  }
}

export default App