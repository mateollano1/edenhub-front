import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-track-more-details',
  templateUrl: './order-track-more-details.component.html',
  styleUrls: ['./order-track-more-details.component.css']
})
export class OrderTrackMoreDetailsComponent implements OnInit {
  order = ""
  orderId: string =""
  constructor(private orderService: OrderService,
              private route: ActivatedRoute) { 
    this.route.params.subscribe((params => {
      this.orderId = params.id;
      window.scroll(0,0);
    }));
  }

  ngOnInit(): void {
    this.orderService.getPurchaseById(this.orderId).subscribe((data: any) => {
    
      this.order = (data['order'])
      console.log(this.order);
        
    })
  }

}
