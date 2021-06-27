import { makeAutoObservable, runInAction } from "mobx";
import api from '@services/api';

class NotepadStore {
  notepads = []

  constructor() {
    makeAutoObservable(this)
  }

  async getGistsList() {
    const response = await api.notepad.getGistsList();
    runInAction(() => {
      this.notepads = response.data;
    })
    console.log("getGistsList ~ response", response);
  }

  async deleteById(id) {
    const response = await api.notepad.deleteById(id);
    runInAction(() => {
      this.notepads = this.notepads.filter(note => note.id !== id);
    })
    console.log("deleteById ~ response", response);
  }
}

export default new NotepadStore();