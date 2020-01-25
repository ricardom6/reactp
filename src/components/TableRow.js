// TableRow.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Alterar botão de edição.


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4000/pessoa/delete/' + this.props.obj._id)
      .then(console.log('Registro removido com sucesso.'))
      .catch(err => console.log(err))
  }

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
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Remover</button>
          
        </td>
      </tr>
    );
  }
}

export default TableRow;