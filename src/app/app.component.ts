import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() PasameElPueblo = new EventEmitter();
  admin: boolean = false
  constructor() { }
  title = 'food-oriente';
  ngDoCheck(){
    let isAdmin = sessionStorage.getItem("ad")
    
    if (isAdmin == "true") {
      this.admin = true
      console.log("es admin");
      
    } 
    else{
      this.admin = false
      console.log("no es admin");

    }

  }
}
