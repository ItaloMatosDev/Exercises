import React, { Component } from 'react'
import Daugther from '../components/Daughter';

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daugther money={this.props.money} spendMoney={this.props.spendMoney}/>
      </div>
    )
  }
}
