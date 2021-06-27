import { makeAutoObservable, runInAction } from "mobx";

class RootStoreUI {
  inProgress = false;
  alert = { 
    open: false,
    severity: 'success',
    autoHideDuration: 3000,
    message: 'Done!'
  };

  constructor() {
    makeAutoObservable(this)
  }

  startProgress() {
    runInAction(() => this.inProgress = true)
  }

  endProgress() {
    runInAction(() => this.inProgress = false)
  }

  openAlert({ 
    open = true,
    severity = 'success',
    autoHideDuration = 3000,
    message = 'Done!'
   }) {
    runInAction(() => {
      this.alert.open = open;
      this.alert.severity = severity;
      this.alert.autoHideDuration = autoHideDuration;
      this.alert.message = message;
    })
  }

  closeAlert() {
    runInAction(() => this.alert.open = false)
  }
}

export default new RootStoreUI();