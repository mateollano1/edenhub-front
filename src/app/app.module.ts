import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProductComponent } from './components/shared/product/product.component';
import { ProductsCategoriesComponent } from './components/products-categories/products-categories.component';
import { FinishBuyComponent } from './components/finish-buy/finish-buy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { OrderTrackComponent } from './components/order-track/order-track.component';
import { OrderTrackMoreDetailsComponent } from './components/order-track-more-details/order-track-more-details.component';

//Pipes
import { PricePipe } from './pipes/price.pipe';
import { NoItemsFoundComponent } from './components/shared/no-items-found/no-items-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PresentationPageComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    CategoriesComponent,
    SearchPageComponent,
    ProductComponent,
    ProductsCategoriesComponent,
    FinishBuyComponent,
    LoadingComponent,
    OrderTrackComponent,
    OrderTrackMoreDetailsComponent,
    PricePipe,
    NoItemsFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
