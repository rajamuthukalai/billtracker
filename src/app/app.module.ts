import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BillComponent } from './bill/bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillerComponent } from './biller/biller.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './service/category.service';
import { BillerService } from './service/biller.service';
import { AccountComponent } from './account/account.component';
import { AccountService } from './service/account.service';
import { UserService } from './service/user.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    // declare components, directives and pipes only
    AppComponent,
    BillComponent,
    DashboardComponent,
    BillerComponent,
    CategoryComponent,
    AccountComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    // import modules only
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // service only?
    CategoryService, BillerService, AccountService, UserService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
