import { makeAutoObservable, runInAction } from "mobx";
import rootStoreUI from "stores/RootStoreUI";
import api from '@services/api';
import Storage from '@services/Storage';
import { httpErrorHandler } from '@utilities/httpHandlers/httpErrorHandler'

class NotepadStore {
  notepads = []

  constructor() {
    makeAutoObservable(this)
    const gists = Storage.get('gists');
    if(gists) {
      runInAction(() => { this.notepads = gists; });
    }
  }

  async getGistsList() {
    rootStoreUI.startProgress();
    try {
      const gists = Storage.get('gists');
      if(gists) {
        runInAction(() => { this.notepads = gists; });
      }
      const response = await api.notepad.getGistsList();

      if(!this.compare(gists, response.data)) {
        Storage.set('gists', response.data);
        runInAction(() => { this.notepads = response.data; });
      }
      console.info("getGistsList ~ response", response);
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
        Storage.set('gists', this.notepads);
      })
      console.info("deleteById ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'error', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  compare(prevGists, nextGists) {
    return JSON.stringify(prevGists) === JSON.stringify(nextGists);
  }
}

export default new NotepadStore();