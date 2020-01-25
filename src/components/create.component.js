// create.component.js
import React, { Component } from 'react';
export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeSobreNome = this.onChangeSobreNome.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nome: '',
            sobrenome: '',
            telefone:''
        }
    }
    onChangeNome(e) {
      this.setState({
        nome: e.target.value
      });
    }
    onChangeSobreNome(e) {
      this.setState({
        sobrenome: e.target.value
      })  
    }
    onChangeTelefone(e) {
      this.setState({
        telefone: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
      console.log(`Os valores são: ${this.state.nome}, ${this.state.sobrenome}, and ${this.state.telefone}`)
      this.setState({
        nome: '',
        sobrenome: '',
        telefone: ''
      })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Adicionar contato</h3>
                <form>
                    <div className="form-group">
                        <label>Nome:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Sobrenome: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Telefone: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Adicionar contato" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}