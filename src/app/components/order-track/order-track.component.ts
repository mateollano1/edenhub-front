import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.css']
})
export class OrderTrackComponent implements OnInit {
  orders = []
  constructor(private orderService: OrderService,
    private router: Router) { 
      window.scroll(0,0);
    }

  ngOnInit(): void {
    this.orderService.getPurchases().subscribe((data: any) => {
      this.orders = data['order']
      // console.log(this.orders);
    }
    )
  }
  more(i) {

    this.router.navigateByUrl(`/order/track/${this.orders[i]['_id']}`)
  }
  search(id) {
    this.orderService.getPurchaseById(id).subscribe((data: any) => {
      this.orders = []
      this.orders.push(data['order'])

    })
  }

}
