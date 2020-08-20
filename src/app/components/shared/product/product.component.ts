import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2'
import { Product } from '../../../models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  closeResult: string;
  cantidad: number = 1
  itemSel: boolean[] = []
  numberSelected: number = 0
  productImages: any []=['https://edenhub-images.s3.amazonaws.com/arepas/plato2_thumb.png','https://edenhub-images.s3.amazonaws.com/arepas/plato2_thumb.png']

  @Input() product: Product;
  @Input() index: string;


  constructor(private modalService: NgbModal,
    private router: Router) {

  }

  ngOnInit(): void {
    this.setItemsFalse()

  }


  itemSelected(i) {
    if (this.itemSel[i]) {
      this.itemSel[i] = false
      this.numberSelected --
      return
    }
    if (this.product.letSelectedItems == this.numberSelected) {
      this.setFirstItemFalse()
      this.numberSelected --
    }
    this.itemSel[i] = !this.itemSel[i]
    this.numberSelected++
  }

  
  saveInCart() {
    let idProduct = this.product['_id'] + " X" + this.cantidad
    let productCar ={
      idProduct:this.product['_id'],
      units: this.cantidad,
      items:[],
      note:""
    }
    for (var i = 0; i < this.product.items.length; ++i) { 
      if (this.itemSel[i]) {
        productCar.items.push(this.product.items[i]['name'])
      }
     }
     console.log(productCar);
     
     let cartProducts = JSON.parse(sessionStorage.getItem("products"));
    if (cartProducts == null) {
      cartProducts = [productCar]
    }
    else {
      cartProducts.push(productCar)
    }
    sessionStorage.setItem("products", JSON.stringify(cartProducts))

    // let cartProducts = JSON.parse(sessionStorage.getItem("products"));
    // if (cartProducts == null) {
    //   cartProducts = [idProduct]
    // }
    // else {
    //   cartProducts.push(idProduct)
    // }
    // sessionStorage.setItem("products", JSON.stringify(cartProducts))
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


  setItemsFalse() {
    if (this.product.items !== undefined) {
      for (var i = 0; i < this.product.items.length; ++i) { this.itemSel[i] = false; }
    }
  }


  setFirstItemFalse() {
    for (var i = 0; i < this.product.items.length; ++i) {
      if (this.itemSel[i]) {
        this.itemSel[i] = false;
        return
      }
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
    }).then((result) => {
      if (!result.value) {
        this.router.navigateByUrl('/factura')
      }
    })
  }


}
