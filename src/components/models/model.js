import {navigate} from "gatsby";
class Model {
  constructor() {
    this.serviceURL = '';
    this.serviceName = '';
    
  }

  get request() {
    return this;
  }

  get without () {
    return this;
  }

  get with () {
    return this;
  }

  async body (url, method = 'GET', body = '') {
    return this._request(url, method, body);
  }

  async method (url, method = 'GET') {
    return this._request(url, method, '');
  }

  async _request (url, method, body) {
    let user = JSON.parse(localStorage.getItem('user-info')) || {};
    let token = user.token;
    try {
      if (body === '') {
        var res = await fetch(url, {
          method: method,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } else {
        res = await fetch(url, {
          method: method,
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          mode: 'cors',
        });
      }
      if (res.status == 401) {
        navigate('/login', {state: {'message': 'Sessão expirada'}});
      }      
      if (!res.ok) {
        res = await res.json();
        throw res;
      }
      
      let data = await res.json();
      return data;
    } catch(e) {
      throw e;
    }
  }

  async list () {
    let url = this.serviceURL+'/'+this.serviceName+'s';
    return this.request.without.body(url);
  }

  async find(id) {
    let url = this.serviceURL+'/'+this.serviceName+'/'+id;
    return this.request.without.body(url);
  }

  async update(id, task) {
    let url = this.serviceURL+'/'+this.serviceName+'/'+id;
    return this.request.with.body(url, 'PUT', task);
  }

  async create(task) {
    let url = this.serviceURL+'/'+this.serviceName;
    return this.request.with.body(url, 'POST', task);
  }

  async delete(id) {
    let url = this.serviceURL+'/'+this.serviceName+'/'+id;
    return this.request.with.method(url, 'DELETE');
  }
}

export default Model;