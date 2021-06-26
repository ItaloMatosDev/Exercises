import React, { Component } from 'react'
import GrandMother from '../components/GrandMother';
import MyContext from './MyContext';

export default class GreatGrandMother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prev) => ({ money: prev.money - 100 }))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          <GrandMother money={this.state.money} spendMoney={this.handleSpendMoney} />
        </div>
      </MyContext.Provider>
    )
  }
}
