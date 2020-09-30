import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  word: string = ""
  products: any []
  result:Boolean=false
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) {
    sessionStorage.setItem("ad", "false")
    this.route.queryParams.subscribe(params => {
      this.word = params['q'];
      productsService.getProductsBySearch(this.word).subscribe(data =>{
        this.products = data['products']

        if(this.products.length==0){
          this.result=true
          console.log("producto"+this.products.length);
        }
       
        window.scroll(0,0);
      })
  });
  }

  ngOnInit(): void {
  }
  search(word){
    this.router.navigateByUrl(`search?q=${word}`)
  }
}
