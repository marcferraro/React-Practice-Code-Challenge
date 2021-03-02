import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: []
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => {
      const massagedArray = sushis.map(sushi => {
        sushi.eaten = false
        return sushi
      })

      this.setState({
        sushis: massagedArray
      })
    })
  }
}

export default App;