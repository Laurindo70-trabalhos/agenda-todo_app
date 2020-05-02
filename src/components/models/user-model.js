import Model from './model'

class UserModel extends Model{
  constructor() {
    super();
    this.serviceURL = 'http://localhost:3000';
    this.serviceName = 'user';
  }

  async list () {
    let url = this.serviceURL+'/'+this.serviceName+'s';
    return this.request.without.body(url);
  }

  async login(user) {
    let url = this.serviceURL+'/'+this.serviceName+'/login';
    return this.request.with.body(url, 'POST', user);
  }
  

}

export default new UserModel();