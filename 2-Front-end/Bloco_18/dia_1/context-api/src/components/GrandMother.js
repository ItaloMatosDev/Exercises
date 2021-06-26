import React, { Component } from 'react'
import Father from '../components/Father'

export default class GrandMother extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a avó</h2>
        <Father money={this.props.money} spendMoney={this.props.spendMoney}/>
      </div>
    )
  }
}
