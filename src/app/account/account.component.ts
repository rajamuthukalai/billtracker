import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account.service';
import { CategoryService } from '../service/category.service';
import { BillerService } from '../service/biller.service';
import { Category } from '../model/category';
import { Biller } from '../model/biller';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService, private categoryService: CategoryService, private billerService: BillerService) { }

  ngOnInit() {
    this.getAccounts();
    this.categoryService.getCategories().subscribe(data => this.categories = data);
    this.billerService.getBillers().subscribe(data => this.billers = data);
  }

  categories: Category[];
  billers: Biller[];

  selectedCategory: Category = new Category();
  selectedBiller: Biller = new Biller();

  error: String;

  account: Account = new Account();
  
  accounts: Account[];
  
  selectedAccount: Account;
  
  onSelect(Account: Account) {
    this.selectedAccount = Object.assign({},Account);
  }
  
  getAccounts(): void {
   this.accountService.getAccounts().subscribe(data =>  this.accounts = data);
  }
    
  addAccount(): void {
    this.account.biller = this.selectedBiller;
    this.account.category = this.selectedCategory;
    this.accountService.addAccount(this.account).subscribe(data => 
      {
        this.accounts.push(data);
        console.log("Account created" + data);
      });
  }
  
  updateAccount(): void {
    if (!this.selectedAccount) {
      this.error = "Category can not be blank!";
      return;
    }
    this.accountService.updateAccount(this.selectedAccount).subscribe(data => 
      {
        this.selectedAccount = undefined;
        this.getAccounts();
      });
  }
  
  removeAccount(Account: Account): void {
    this.accountService.removeAccount(Account).subscribe(()=> this.getAccounts() );
  }
}