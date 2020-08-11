import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-finish-buy',
  templateUrl: './finish-buy.component.html',
  styleUrls: ['./finish-buy.component.css']
})
export class FinishBuyComponent implements OnInit {
  products: any[]
  finalPrice: ""
  public bill: FormGroup
  constructor(private productsService: ProductsService,
    private router: Router) {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    this.getProducts()
    this.createBillForm()
  }
  createBillForm() {
    this.bill = new FormGroup({
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'telephone': new FormControl('', Validators.required),
      'note': new FormControl(''),
    })
  }
  getProducts() {
    let cartProducts = JSON.parse(sessionStorage.getItem("products"));
    if (cartProducts !== null) {
      this.productsService.getBillByProducts(cartProducts).subscribe(data => {
        // console.log(data);
        this.products = data['bill']
        this.finalPrice = data['finalPrice']
      })
    }
  }
  deleteProduct(i) {
    let cartProducts = JSON.parse(sessionStorage.getItem("products"));
    let prod = this.products[i]['product']['_id'] + " X" + this.products[i]['ammount']
    for (let index = 0; index < cartProducts.length; index++) {
      const element = cartProducts[index];
      if (element == prod) {
        cartProducts.splice(i, 1)
        sessionStorage.setItem("products", JSON.stringify(cartProducts))
        index = cartProducts.length
      }

    }
    this.getProducts()
  }

  savePurchase() {
    if (this.products == undefined) {
      Swal.fire({
        title: 'Acción inválida',
        text: 'Por favor selecciona primero el producto que deseas comprar.',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#008000',
      })
      return
    }
    if (this.bill.valid) {
      let newFormatProduct = []
      for (let index = 0; index < this.products.length; index++) {
        const element = this.products[index];
        let prod = {
          'ammount': element['ammount'],
          'idProduct': element['product']['_id'],
        }
        newFormatProduct.push(prod)
      }
      let purchase = {
        'name': this.bill.value['name'],
        'location': this.bill.value['location'],
        'telephone': this.bill.value['telephone'],
        'note': this.bill.value['note'],
        'totalPrice': this.finalPrice,
        'products': newFormatProduct
      }

      this.productsService.postPurchase(purchase).subscribe(data => {
        sessionStorage.clear()
        let a= "2323"
        Swal.fire({
          title: '¡Gracias por tu compra!',
          html:
            '<span id="swal2-content" style="font-size:15px;">En estos momentos nos disponemos a preparar tu pedido para llevarlo hasta la puerta de tu casa. <br></span>' +
            '<span style="font-size:12px; color: #008000;">**</span>' +
            '<span style="font-size:12px; text-align: left;"> Si tienes alguna duda de tu pedido no dudes en escribirnos a nuestro Whatsapp, Tú número de orden es: </span>' +

            `<input style="text-align:center" value=${data['newPurchase']['friendlyId']} class="swal2-input" disabled>`,
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#008000'
        }).then((result) => {
          this.router.navigateByUrl('#')
        })

      })

    } else {
      // console.log("invalid");
      Swal.fire({
        title: 'Formulario inválido',
        text: 'Por favor ingrese correctamente los datos',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#008000',
      })
    }
  }
}
