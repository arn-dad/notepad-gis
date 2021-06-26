import { axios } from '@config/axios';
import { NotepadAPI } from '@modules/Notepad/NotepadAPI'
import { CreateNotepadAPI } from '@modules/CreateNotepad/CreateNotepadAPI'

class Api {
 
  constructor() {
    this.notepad = new NotepadAPI(this);
    this.createNotepad = new CreateNotepadAPI(this);
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