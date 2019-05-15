import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, passwordConfirm, email, userPhoto) => {
    return this.service.post('/auth/signup', { username, password, passwordConfirm, email, userPhoto })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/auth/login', { username, password })
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/auth/currentUser')
      .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/auth/logout')
      .then(response => response.data)
  }

  handleUpload = (theFile) => {
    return this.service.post('/upload', theFile)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}

export default AuthService;