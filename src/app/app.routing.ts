import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from 'app/landing/landing.component';
import {StartComponent} from 'app/start/start.component';
import {MainMenuComponent} from 'app/main-menu/main-menu.component';
import {QuickTestComponent} from 'app/quick-test/quick-test.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'start', component: StartComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'quicktest', component: QuickTestComponent },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
