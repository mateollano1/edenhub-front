import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-finish-buy',
  templateUrl: './finish-buy.component.html',
  styleUrls: ['./finish-buy.component.css']
})
export class FinishBuyComponent implements OnInit {
  products: any[]
  finalPrice: ""
  public bill: FormGroup
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.createBillForm()
  }
  createBillForm(){
    this.bill = new FormGroup({
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'telephone': new FormControl('', Validators.required),
      'note': new FormControl(''),
    })
  }
  getProducts(){
    let cartProducts = JSON.parse(localStorage.getItem("products"));
    if (cartProducts !== null) {
      this.productsService.getBillByProducts(cartProducts).subscribe(data =>{
        console.log(data);
        this.products = data['bill']
        this.finalPrice = data['finalPrice']
      })
    }
  }
  deleteProduct(i){
    let cartProducts = JSON.parse(localStorage.getItem("products"));
    let prod = this.products[i]['product']['_id'] + " X" + this.products[i]['ammount']
    for (let index = 0; index < cartProducts.length; index++) {
      const element = cartProducts[index];
      if (element == prod) {
        cartProducts.splice(i,1)
        localStorage.setItem("products", JSON.stringify(cartProducts))
        index = cartProducts.length
      }
      
    }
    this.getProducts()
  }

  savePurchase(){
    if (this.products.length > 0) {
      if (this.bill.valid) {
        let newFormatProduct = []
        for (let index = 0; index < this.products.length; index++) {
          const element = this.products[index];
          let prod ={
            'ammount': element['ammount'],
            'idProduct': element['product']['_id'],
          }
          newFormatProduct.push(prod)
        }
       let  purchase = {
         'name':this.bill.value['name'],
         'location':this.bill.value['location'],
         'telephone':this.bill.value['telephone'],
         'note':this.bill.value['note'],
         'totalPrice':this.finalPrice,
         'products': newFormatProduct
        }
        this.productsService.postPurchase(purchase).subscribe(data =>{
          console.log(data);
          Swal.fire({
            title: 'Compra finalizada exitosamente',
            text: '¡Gracias por tu compra!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

        })
        
      }else{
        console.log("invalid");
        Swal.fire({
          title: 'Formulario invalido',
          text: 'Por favor ingrese correctamente los datos',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }

}
