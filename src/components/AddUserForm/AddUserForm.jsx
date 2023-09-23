import React, { Component } from 'react';

class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });

    // this.setState({
    //   name: '',
    //   email: '',
    // });
    this.props.closeForm();
  };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddUserForm;
