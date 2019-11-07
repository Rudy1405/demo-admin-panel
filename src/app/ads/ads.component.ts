import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  alertType = 'info';
  showAlert = false;
  constructor() { }

  ngOnInit() {
  }

  showmsg() {
    this.showAlert = true;
  }

  close() {
    this.showAlert = false;
  }

}
