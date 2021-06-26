import React, { Component } from 'react'
import MyContext  from './MyContext'
export default class Daughter extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} para gastar` } </p>
                <button onClick={value.spendMoney}>PEDIR IFOOD</button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{`Eu tenho ${this.props.money} para gastar` } </p>
        <button onClick={this.props.spendMoney}>PEDIR IFOOD</button> */}
      </div>
    )
  }
}
