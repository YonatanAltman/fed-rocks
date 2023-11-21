import {Component} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name: string;

  constructor(private userService: UserService) {
    this.name = this.userService.user.name
  }

  onSomething() {
    //this.userService.user;
  }
}
