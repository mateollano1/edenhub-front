import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2'
import { Product } from '../../../models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private modalService: NgbModal,
    private router: Router) {

  }

  ngOnInit(): void {
  }
  saveInCart() {
    // console.log(this.product['_id']);
    let idProduct = this.product['_id'] + " X" + this.cantidad
    let cartProducts = JSON.parse(sessionStorage.getItem("products"));
    if (cartProducts == null) {
      cartProducts = [idProduct]
    }
    else {
      cartProducts.push(idProduct)
    }
    sessionStorage.setItem("products", JSON.stringify(cartProducts))
    this.message(this.product.name)
  }
  plus() {
    this.cantidad = this.cantidad + 1
  }
  minus() {
    if (this.cantidad > 1) {
      this.cantidad = this.cantidad - 1
    }
  }

  message(nombre: string) {
    Swal.fire({
      icon: 'success',
      title: 'Se agregó al carrito',
      text: nombre,
      showCancelButton: true,
      confirmButtonColor: '#008000',
      confirmButtonText:
        ' Continuar comprando',
      cancelButtonColor: '#FF6600',
      cancelButtonText:
        'Ir al carrito'

      // imageUrl: this.product['images'][0]['url'],
      // imageWidth: 200,
      // imageHeight: 200,

    }).then((result) => {
      if (!result.value) {
        this.router.navigateByUrl('/factura')
      }
    })
  }


}
