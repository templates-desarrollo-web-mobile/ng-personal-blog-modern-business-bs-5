import { Component } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title=GENERAL.title
}
