import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillComponent } from './bill/bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillerComponent } from './biller/biller.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [  
  { path: 'bill', component: BillComponent },  
  { path: 'biller', component: BillerComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}