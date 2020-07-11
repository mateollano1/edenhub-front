import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2'
import { Product } from '../../../models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  closeResult: string;
  cantidad: number = 1
  @Input() product: Product;
  @Input() index: string;
  constructor(private modalService: NgbModal) {
    
   }

  ngOnInit(): void {
  }
  saveInCart() {
    console.log(this.product['_id']);
    let idProduct = this.product['_id'] + " X" + this.cantidad
    let cartProducts = JSON.parse(localStorage.getItem("products"));
    if (cartProducts == null) {
      cartProducts = [idProduct]
    }
    else {
      cartProducts.push(idProduct)
    }
    localStorage.setItem("products", JSON.stringify(cartProducts))
  }
  plus() {
    this.cantidad = this.cantidad + 1
  }
  minus() {
    if (this.cantidad>1) {
      this.cantidad = this.cantidad - 1
    }
  }

}
