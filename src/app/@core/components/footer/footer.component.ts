import { Component, OnInit } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  title = GENERAL.title;
  constructor() { }

  ngOnInit(): void {
  }

}
