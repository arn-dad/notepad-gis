import { makeAutoObservable, runInAction } from "mobx";
import api from '@services/api';

class CreateNotepadStore {
  notepadForm = { id: null, title: '', notes: [ { id: null, title: '', note: '' } ] }

  constructor() {
    makeAutoObservable(this)
  }

  async updateNotepad(data) {
    const { id, ...rest } = data; 
    const notepad = this.prepareNotepad(rest);
    const response = await api.notepad.update(id, { data: notepad });
    console.log("updateNotepad ~ response", response);
  }

  async createNotepad(data) {
    const notepad = this.prepareNotepad(data);
    const response = await api.notepad.create({ data: notepad });
    console.log("createNotepad ~ response", response);
  }

  async getNotepad(id) {
    const notepad =  { id }
    const response = await api.notepad.getNotepadById(id);
    const content = JSON.parse(response.data.files.notepad.content);
    notepad.title =  content.title
    notepad.notes =  content.notes
    runInAction(() => {
      this.notepadForm = notepad
    })
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
}

export default new CreateNotepadStore();