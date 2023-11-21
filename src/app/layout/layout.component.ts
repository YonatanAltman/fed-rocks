import {Component} from '@angular/core';
import {APP_NAVS} from "./layout.const";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  navs = APP_NAVS;

  someClick(user: string) {
    console.log('user',user);
  }
}
