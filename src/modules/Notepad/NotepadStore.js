import { makeAutoObservable } from "mobx";
import api from '@services/api';

class NotepadStore {
  notepads = []

  constructor() {
    makeAutoObservable(this)
  }

  async getGistsList() {
    const response = await api.notepad.getGistsList();
    this.notepads = response.data;
  }

  async deleteById(id) {
    const response = await api.notepad.deleteById(id);
    this.notepads = this.notepads.filter(note => note.id !== id);
  }
}

export default new NotepadStore();