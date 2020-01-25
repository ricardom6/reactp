// TableRow.js

import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nome}
          </td>
          <td>
            {this.props.obj.sobrenome}
          </td>
          <td>
            {this.props.obj.telefone}
          </td>
          <td>
            <button className="btn btn-primary">Editar</button>
          </td>
          <td>
            <button className="btn btn-danger">Remover</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;