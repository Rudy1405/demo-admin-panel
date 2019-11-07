import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent implements OnInit {
  @ViewChild('myDropdown', { static: false }) myDropdown: ElementRef;
  alertType = 'info';
  showAlert = false;
  buses = [
    {
      nombre: '55',
      unidad: '02',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '55',
      unidad: '14',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '55',
      unidad: '23',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '55',
      unidad: '24',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: 'Azteca',
      unidad: '73',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: 'Azteca',
      unidad: '92',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: 'Azteca',
      unidad: '37',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '13 Angelopolis',
      unidad: '48',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '13 Angelopolis',
      unidad: '201',
      info1: 'info1',
      info2: 'info2'
    },
    {
      nombre: '13 Angelopolis',
      unidad: '88',
      info1: 'info1',
      info2: 'info2'
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  showDropdown() {

    // document.getElementById('myDropdown').classList.toggle('show');
  }

  showmsg() {
    this.showAlert = true;
  }

  close() {
    this.showAlert = false;
  }

}
