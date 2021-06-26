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
}

export default new NotepadStore();