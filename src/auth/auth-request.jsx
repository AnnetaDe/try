import { clearToken, herokuApi, setToken } from '../configApi/herokuApi';

export const signUp = async credentials => {
  try {
    const { data } = await herokuApi.post('users/signup', credentials);
    console.log('registered', data);
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async credentials => {
  try {
    const { data } = await herokuApi.post('users/login', credentials);
    setToken(data.token);
    console.log('logined', data);

    return data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
export const logOut = async () => {
  try {
    await herokuApi.post('users/logout');
    console.log('logOut');
    clearToken();
  } catch (error) {
    return error;
  }
};

// login(data);

// logOut();
// signUp(data);

// const data = { name: 'ann', email: 'ann2@ann.com', password: 'ann2@ann.com' };

export const loginPost = async credentials => {
  const response = await herokuApi.post('users/login', credentials);
  setToken(response.data.token);

  // console.log('credentials', credentials);
  // console.log('logined', response);
  // console.log('token', response.data.token);

  return response;
};
export const logOutPost = async () => {
  const response = await herokuApi.post('users/logout');
  // clearToken();
  console.log('logOut', response);
  return response;
};
export const signUpPost = async credentials => {
  const response = await herokuApi.post('users/signup', credentials);
  console.log('registered', response);
  return response;
};

export const refresh = async token => {
  const response = await herokuApi.get('users/current', token);
  console.log('refresh', response);
  return response;
};
