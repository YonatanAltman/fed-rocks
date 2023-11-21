import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {name: 'Yonatan', email: 'yonatan@yaltman.com'}

}
