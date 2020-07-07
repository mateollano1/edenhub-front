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
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe((params => {
      this.typeName = params.name;
    }));

  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.products = []
    this.productsService.getProductsByCategory(this.typeName).subscribe((data:any)=>{
      this.products = data['products']
    })
  }

}
