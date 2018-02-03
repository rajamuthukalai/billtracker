import { Injectable } from '@angular/core';
import { CATEGORIES } from '../mock-categories';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/retry';

import {AppSettings} from '../app.settings';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>( AppSettings.API_ENDPOINT +'/categories').retry(3);
    //return CATEGORIES;
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(AppSettings.API_ENDPOINT +'/category', category);
    //CATEGORIES.push(category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(AppSettings.API_ENDPOINT+ '/category/' + category.id, category);
    //CATEGORIES.push(category);
  }

  removeCategory(category: Category): Observable<any> {
    /* const index = CATEGORIES.indexOf(category);
    if (index != -1) {
      CATEGORIES.splice(index, 1);
    } else {
      console.log("unable to remove " + category + "CATEGORIES array.");
    } */    
    console.log(category.id);
    return this.http.delete(AppSettings.API_ENDPOINT +'/category/' + category.id);
  }
}