import UserModel from '../components/models/user-model'

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user-info')) || {};
}

export const setUser = (user) => {
  return localStorage.setItem('user-info', JSON.stringify(user));
}

export const handleLogin = async (user) => {
  try {
    let res = await UserModel.login(user);
    setUser(res);
    return true;
  } catch(e) {
    throw e;
  }
}

export const isLoggedIn = () => {
  let user = getUser();
  return !!user.token;
}

export const logout = (callback) => {
  setUser({});
  callback('/login');
}
