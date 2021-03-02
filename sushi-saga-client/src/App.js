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
      progress: 0,
      money: 100
    }
  }

  countEatenSushi = () => {
    let eatenSushiCount = []
    this.state.sushis.forEach(sushi => {sushi.eaten ? eatenSushiCount.push(1) : null})

    return eatenSushiCount
  }

  eatSushi = (eatenSushi) => {
    if (this.state.money >= eatenSushi.price){
      const newMoney = this.state.money - eatenSushi.price
      const newArray = this.state.sushis.map(sushi => {
        if (sushi.id === eatenSushi.id){
          eatenSushi.eaten = true
          return eatenSushi
        } else {
          return sushi
        }
      })
      // console.log(newArray)
      this.setState({
        money: newMoney,
        sushis: newArray
      })
      
    }
  }

  moreSushi = () => {
    this.setState({
      progress: this.state.progress + 4
    })
    console.log(this.state.sushis.slice(this.state.progress, this.state.progress + 4))
  }


  render() {

    const count = this.countEatenSushi()
    // console.log(count)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} progress={this.state.progress} eatSushi={this.eatSushi} moreSushi={this.moreSushi}/>
        <Table plates={count} money={this.state.money}/>
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => {
      // console.log(sushis)
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