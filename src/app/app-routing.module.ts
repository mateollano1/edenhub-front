import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { FinishBuyComponent } from './components/finish-buy/finish-buy.component';


const routes: Routes = [
  { path: '', component: PresentationPageComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'categorias/:name', component: ProductsCategoriesComponent },
  { path: 'factura', component: FinishBuyComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PresentationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
