import { IAuthResponse } from "@/models";
import { removeTokensStorage } from "@/services/auth";
import { getLocalStorage } from "@/utils";
import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class User {
  data: IAuthResponse | null = getLocalStorage('user');

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'user',
      properties: ['data'],
      storage: typeof localStorage === 'undefined' ? undefined : localStorage
    });
  }

  setUser(user: IAuthResponse) {
    this.data = user;
  }

  clearStore() {
    this.data = null
    removeTokensStorage();
  }
}

const userStore = new User();

export default userStore;