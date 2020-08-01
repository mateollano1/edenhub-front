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
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) { 
    this.route.queryParams.subscribe(params => {
      this.word = params['q'];
      productsService.getProductsBySearch(this.word).subscribe(data =>{
        this.products = data['products']
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
