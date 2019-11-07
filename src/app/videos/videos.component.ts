import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  alertType = 'info';
  showAlert = false;
  videos = [
    {
      name: 'Starbucks Huexo',
      url: '/videos/StarbucksHuexo'
    },
    {
      name: 'Banamex Huexo',
      url: '/videos/bana'
    },
    {
      name: 'BBVA Huexo',
      url: '/videos/StarbucksHuexo'
    },
    {
      name: 'Las Pampas Juarez',
      url: '/videos/pampasjuarez'
    },
    {
      name: 'UnoTV',
      url: '/videos/uno1'
    },
    {
      name: 'Walmart Reforma',
      url: '/videos/WalmartReforma'
    },
    {
      name: 'La estrella de puebla',
      url: '/videos/Estrella'
    },
    {
      name: 'La estrella de puebla',
      url: '/videos/Estrella'
    },
    {
      name: 'La estrella de puebla',
      url: '/videos/Estrella'
    },
    {
      name: 'La estrella de puebla',
      url: '/videos/Estrella'
    }
  ];

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
