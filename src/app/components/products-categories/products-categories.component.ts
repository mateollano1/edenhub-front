import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {
  typeName: string = ""
  products: any [] = []
  word: string = ""
  imageBack = ""
  loading: boolean = true
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe((params => {
      this.typeName = params.name;
      this.word = this.typeName.charAt(0).toUpperCase() + this.typeName.slice(1)
    }));

  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.products = []
    this.productsService.getProductsByCategory(this.typeName).subscribe((data:any)=>{
      this.products = data['products']
      this.imageBack = `url('${data['image']}')`
      this.loading = false
    })
  }

}
