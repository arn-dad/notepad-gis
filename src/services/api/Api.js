import { axios } from '@config/axios';
import { NotepadAPI } from './gateways/NotepadAPI';

class Api {
 
  constructor() {
    this.notepad = new NotepadAPI(this);
  }

  setAuthorizationToken(token) {
    if (!token) return;
    
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  removeAuthorizationToken() {
    delete axios.defaults.headers['Authorization']
  }
}

export default new Api()