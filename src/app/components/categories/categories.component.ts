import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  loading: boolean = false
  timeLeft: number = 60;
  interval;
  constructor() {
    sessionStorage.setItem("ad", "false")
    this.loading = true
    this.interval = setInterval(() => {
      this.loading = false
    },500)
    window.scroll(0,0);
   }

  ngOnInit(): void {
  }

}
