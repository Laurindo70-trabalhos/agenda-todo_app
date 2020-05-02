import React from "react"
import TasksList from "../components/tasks-list";
import { Link } from "gatsby";
import isPrivateRoute from "../components/private-route";
import LogoutButton from  "../components/logout-button";

class Index extends React.Component {
  render(){
    return (
      <div>
        <h1>Listar uma tarefa</h1>
        <TasksList  />
        <Link to="/create-task">Criar uma tarefa</Link>
        <LogoutButton />
      </div>
    );
  }
}

export default isPrivateRoute({component: Index, location: '/index'});