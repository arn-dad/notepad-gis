import { makeAutoObservable } from "mobx";
import api from '@services/api';

class CreateNotepadStore {

  constructor() {
    makeAutoObservable(this)
  }

  async createNotepad(data) {
    const notepad = this.prepareNotepad(data);
    const response = await api.createNotepad.create({ data: notepad });
  }


  prepareNotepad(data) {

    const template = {
      description: 'new manuals',
      public: true,
      files: {}
    }

    template.files[Math.random()] = {
      content: JSON.stringify({
        title: 'Notepad Title',
        notes: [{ title: 'sop', note: 'content' }]
      })
    };

    return template;
  }
}

export default new CreateNotepadStore();