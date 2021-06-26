import React, { Component } from 'react'

export default class DadosPessoas extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="name">
            Nome: <br />
            <input type="text" max='40' required id="name" />
          </label>
          
          <br />

          <label htmlFor="cpf">
            CPF: <br />
            <input type="text" max='11' required id="cpf" />
          </label>

        </fieldset>

      </div>
    )
  }
}
