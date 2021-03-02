import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      money: 100
    }
  }

  countEatenSushi = () => {
    let eatenSushiCount = []
    this.state.sushis.forEach(sushi => {sushi.eaten ? eatenSushiCount.push(1) : null})

    return eatenSushiCount
  }


  render() {

    const count = this.countEatenSushi()
    console.log(count)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table sushis={this.state.sushis} money={this.state.money}/>
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => {
      console.log(sushis)
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