import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  busesNumber: number;
  adsNumber: number;
  videosNumber: number;

  constructor() {
    this.adsNumber = 55;
    this.busesNumber = 20;
    this.videosNumber = 4;
  }

  ngOnInit() {
  }

}
