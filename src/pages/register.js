import React from "react"
import UserModel from  "../components/models/user-model"
import {Link} from "gatsby"
import Message from "../components/message";

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        name: ''
      },
      isSaving: false,
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {...this.state};
    newState.user[e.target.name] = e.target.value;
    this.setState(newState);
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await this.setState({
        ...this.state, 
        isSaving: true,
        user: {
          ...this.state.user
        }
      });
      let res = await UserModel.create(this.state.user);
      this.setState({
        user: {
          email: '',
          password: '',
          name: ''
        },
        isSaving: false,
        message: res.message
      });
    }catch(e) {
      this.setState({
        user: {
          email: '',
          password: '',
          name: ''
        },
        isSaving: false,
        message: e.message
      });
    }
  }

  render() {
    return (
      <div>
        <Message message={this.state.message} />
        <form>
          <p>
            Email
            <input type="text" disabled={this.state.isSaving} name="email" value={this.state.user.email} onChange={this.handleChange} />
          </p>
          <p>
            Senha
            <input type="password" disabled={this.state.isSaving} name="password" value={this.state.user.password} onChange={this.handleChange} />
          </p>
          <p>
            Nome
            <input type="text" disabled={this.state.isSaving} name="name" value={this.state.user.name} onChange={this.handleChange} />
          </p>
          <input type="button" value="Registrar" onClick={this.handleSubmit} />
        </form>
        <Link to="/login">Voltar</Link>
      </div>
    );
  }
}