import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';

const routes: Routes = [];

@NgModule({
  imports: [
    LandingPageModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
