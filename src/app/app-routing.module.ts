import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';


const routes: Routes = [
  { path: 'index', component: PresentationPageComponent },
  { path: 'pro', component: ContactUsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PresentationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
