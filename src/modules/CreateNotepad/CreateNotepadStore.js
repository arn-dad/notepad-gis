import { makeAutoObservable, runInAction } from "mobx";
import rootStoreUI from "stores/RootStoreUI";
import api from '@services/api';
import { httpErrorHandler } from '@utilities/httpHandlers/httpErrorHandler'

class CreateNotepadStore {
  notepadForm = { id: null, title: '', notes: [ { id: null, title: '', note: '' } ] }

  constructor() {
    makeAutoObservable(this)
  }

  async createNotepad(data) {
    rootStoreUI.startProgress();
    const notepad = this.prepareNotepad(data);
    try {
      const response = await api.notepad.create({ data: notepad })
      rootStoreUI.openAlert({ message: 'Notepad successfully created!' });
      const updatedNotepad = this.updateLocalNotepadData(response.data.id, response.data);
      runInAction(() => { this.notepadForm = updatedNotepad });
      console.info("createNotepad ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'error', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  async updateNotepad(data) {
    rootStoreUI.startProgress();
    const { id, ...rest } = data; 
    const notepad = this.prepareNotepad(rest);
    try {
      const response = await api.notepad.update(id, { data: notepad });
      rootStoreUI.openAlert({ message: 'Notepad successfully updated!' });
      console.info("updateNotepad ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'error', message });
    } finally {
      rootStoreUI.endProgress();
    }
    
  }

  async getNotepad(id) {
    rootStoreUI.startProgress();
    try {
      const response = await api.notepad.getNotepadById(id);
      const notepad = this.updateLocalNotepadData(id, response.data);
      runInAction(() => { this.notepadForm = notepad });
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'warning', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  prepareNotepad(data) {
    const template = this.createTemplate()
    template.description = data.title;
    template.files.notepad = {
      filename: 'notepad',
      content: JSON.stringify(data)
    };

    return template;
  }

  reset() {
    runInAction(() => {
      this.notepadForm = { id: null, title: '', notes: [ { id: null, title: '', note: '' } ] }
    })
  }

  createTemplate() {
    return {
      description: '',
      public: true,
      files: {}
    }
  }

  updateLocalNotepadData(id, data) {
    if(!data.files.notepad) {
      throw new Error('Requires authentication');
    }
    const notepad = { id };
    const content = JSON.parse(data.files.notepad.content);
    notepad.title =  content.title;
    notepad.notes =  content.notes;
    return notepad;
  }
}

export default new CreateNotepadStore();