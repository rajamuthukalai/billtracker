import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-categories';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private catogoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  error: String;

  category: Category = new Category();

  categories: Category[];

  selectedCategory: Category;

  onSelect(category: Category) {
    this.selectedCategory = Object.assign({}, category);
  }

  getCategories(): void {
    this.catogoryService.getCategories().subscribe(
      data => {this.categories = data},
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // client side or network error
          console.log('Client side error occurred: ', err.error.message)
        } else {
          // server side error
          console.log('Server side error occurred, error code: ${err.status}, body: ${err.error}');
        }
      }
    );
  }
  
  addCategory(): void {
    console.log(this.category);
    if (!this.category.name || this.category.name == '') {
      this.error = "New category can not be blank!";
      return;
    }
    this.catogoryService.addCategory(this.category).subscribe(data => 
      {
        this.categories.push(data);
        this.category.name='';
      });
  }

  updateCategory(): void {
    if (!this.selectedCategory.name || this.selectedCategory.name == '') {
      this.error = "Category can not be blank!";
      return;
    }
    this.catogoryService.updateCategory(this.selectedCategory).subscribe(data => 
      {
        //this.categories.push(data);
        this.selectedCategory = undefined;
        this.getCategories();
      });
  }

  removeCategory(category: Category): void {
    this.catogoryService.removeCategory(category).subscribe(()=> this.getCategories() );
  }
}
