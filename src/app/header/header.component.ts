import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {UserStoreService} from "../service/user-store.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private userService: UserService = inject(UserService);
  protected store: UserStoreService = inject(UserStoreService);
  @Input() title = 'Hello';
  @Input() navs!: { link: string, label: string }[];

  @Output() user = new EventEmitter<string>();

  get email() {
    return this.userService.user.email
  }

  onClick() {
    this.user.emit('Yonatan');
  }
}


@Component({
  selector: 'app-new',
  template: ''
})
export class NewComponent extends HeaderComponent implements OnInit{

  ngOnInit() {
  }
}
