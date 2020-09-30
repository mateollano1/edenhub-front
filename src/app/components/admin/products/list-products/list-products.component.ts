import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../../../../services/companies.service';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  companies: any[]
  products: any[]
  itemsProducts: any []
  constructor(private companiesService: CompaniesService,
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCompaniesPresentation()

  }
  getCompaniesPresentation() {
    this.companiesService.getCompaniesPresentation().subscribe((data: any) => {
      this.companies = data['companies']
    })
  }
  selected(item: any){
    this.products = []
    this.productsService.getProductsByCompanyId(item).subscribe((data: any) => {
      this.products = data['products']
      this.itemsProducts = data['products']['items']
      console.log(this.itemsProducts);
      
    })
  }
}
