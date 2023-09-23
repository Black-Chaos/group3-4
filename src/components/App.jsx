import { Component } from "react";
import { usersData } from "data/users";
import { Button } from "./Button/Button";
import { UsersList } from "./UsersList/UsersList";

export class App extends Component {
  state = {
    users: usersData,
    isListShow: false,
  }

  showList = () => {
    this.setState({
      isListShow: true,
    })
  }

  deleteUser = (idUser) => {
    this.setState((prevState) => ({
        users: prevState.users.filter(({id}) => idUser !== id ),
      })
    )
  }

  render() {
    const { users, isListShow } = this.state;

    return <>
      {isListShow ? <UsersList users={users} handleDelete={ this.deleteUser} /> :
        <Button text="Show list of users" clickHandle={this.showList} />}
    </>
   
  }
}