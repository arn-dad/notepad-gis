import { makeAutoObservable } from "mobx";
import { verifyToken } from '@utilities/auth/verifyToken';
import rootStoreUI from './RootStoreUI';

class RootStore {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  checkUserAuthentication() {
    this.isAuth = verifyToken();

    if(this.isAuth) {
      return;
    }
   
    rootStoreUI.openAlert({ 
      severity: 'info',
      autoHideDuration: 5000,
      message: "You are not authorized, You have limited access to perform actions."
    });
  }
  
}

export default new RootStore();