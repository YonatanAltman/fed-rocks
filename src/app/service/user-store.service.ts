import {Injectable} from '@angular/core';
import {subscriptionLogsToBeFn} from "rxjs/internal/testing/TestScheduler";

export interface User {
  uid: string;
  fullname: string;
  email: string;
}

export interface UserState {
  user: User | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private state!: UserState;

  constructor() {
    this.state = {user: null}
  }

  update(newUser: User) {
    this.state = {user: newUser};
    // update all listeners
  }

  select() {

  }
}
