import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { FinishBuyComponent } from './components/finish-buy/finish-buy.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';
import { OrderTrackMoreDetailsComponent } from './components/order-track-more-details/order-track-more-details.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListCompaniesComponent } from './components/admin/companies/list-companies/list-companies.component';
import { ListProductsComponent } from './components/admin/products/list-products/list-products.component';
import { CreateCompaniesComponent } from './components/admin/companies/create-companies/create-companies.component';
import { CreateProductsComponent } from './components/admin/products/create-products/create-products.component';
import { BoxDayComponent } from './components/admin/box-day/box-day.component';


const routes: Routes = [
  { path: '', component: PresentationPageComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'categorias/:name', component: ProductsCategoriesComponent },
  { path: 'factura', component: FinishBuyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order/track', component: OrderTrackComponent },
  { path: 'order/track/:id', component: OrderTrackMoreDetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'locales', component: ListCompaniesComponent },
      { path: 'productos', component: ListProductsComponent },
      { path: 'cajadiaria', component: BoxDayComponent },
      { path: 'locales/crear', component: CreateCompaniesComponent },
      { path: 'productos/crear', component: CreateProductsComponent },
      // { path: 'order/track', component: OrderTrackComponent },


    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },

  // { path: '**', component: PresentationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
