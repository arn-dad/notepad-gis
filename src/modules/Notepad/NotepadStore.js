import { makeAutoObservable, runInAction } from "mobx";
import rootStoreUI from "stores/RootStoreUI";
import api from '@services/api';
import { httpErrorHandler } from '@utilities/httpHandlers/httpErrorHandler'

class NotepadStore {
  notepads = []

  constructor() {
    makeAutoObservable(this)
  }

  async getGistsList() {
    rootStoreUI.startProgress();
    try {
      const response = await api.notepad.getGistsList();
      runInAction(() => { this.notepads = response.data; });
      console.log("getGistsList ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'warning', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  async deleteById(id) {
    rootStoreUI.startProgress();
    try {
      const response = await api.notepad.deleteById(id);
      rootStoreUI.openAlert({ message: 'Notepad successfully deleted!' });
      runInAction(() => {
        this.notepads = this.notepads.filter(note => note.id !== id);
      })
      console.log("deleteById ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'error', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }
}

export default new NotepadStore();