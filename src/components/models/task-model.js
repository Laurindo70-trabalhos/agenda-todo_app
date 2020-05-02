import Model from './model'

class TaskModel extends Model{
  constructor() {
    super();
    this.serviceURL = 'http://localhost:3000';
    this.serviceName = 'task';
  }

  async list () {
    let url = this.serviceURL+'/'+this.serviceName+'s';
    return this.request.without.body(url);
  }
  
}

export default new TaskModel();