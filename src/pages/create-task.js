import React from 'react';
import TaskForm from '../components/task-form';
import isPrivateRoute from '../components/private-route';

class CreateTask extends React.Component {
  render() {
    return (
      <div>
        <h1>Criar uma tarefa</h1>
        <TaskForm />
      </div>
    )
  }
}

export default isPrivateRoute({component: CreateTask, location: '/create-task'});