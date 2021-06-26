import { makeAutoObservable } from "mobx";
import api from '@services/api';

class NotepadStore {
  notepads = []

  constructor() {
    makeAutoObservable(this)
  }

  async getGists() {
    const response = await api.notepad.getGists();
    this.notepads = response.data;
  }

  async deleteGists(id) {
    const response = await api.notepad.deleteGists(id);
    this.notepads = this.notepads.filter(note => note.id !== id);
  }
}

export default new NotepadStore();