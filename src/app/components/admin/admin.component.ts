import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  inventarioColor: string = ""
  maquinaColor: string = ""
  proveedorColor: string = ""
  trabajadorColor: string = ""
  reporteColor: string = ""
  puntosV: string = ""
  rol: string;
  mode: string = 'over';
  @Output () admin: EventEmitter<string> = new EventEmitter();
  constructor() {
    console.log("emito");
    sessionStorage.setItem("ad", "true")
   }

  ngOnInit(): void {
    this.onResize();
    // this.clearColor()
    this.changeColor(4)
  }


  changeColor(index: number) {
    this.clearColor()
    switch (index) {
      case 0:
        this.inventarioColor = "#F58F0D"
        break;
      case 1:
        this.maquinaColor = "#F58F0D"
        break;
      case 2:
        this.proveedorColor = "#F58F0D"
        break;
      case 3:
        this.trabajadorColor = "#F58F0D"
        break;
      case 4:
        this.puntosV = "#F58F0D"
        break;
      case 5:
        this.reporteColor = "#F58F0D"
        break;

      default:
        break;
    }
  }
  clearColor() {
    this.inventarioColor = "#66615b"
    this.maquinaColor = "#66615b"
    this.proveedorColor = "#66615b"
    this.trabajadorColor = "#66615b"
    this.reporteColor = "#66615b"
    this.puntosV = "#66615b"
  }
  onResize() {
    let sizeWindow = window.innerWidth;
    if (sizeWindow <= 768) {
      this.mode = 'over';
    } else {
      this.mode = 'side'
    }
  }

}
