import { Injectable } from '@angular/core';
import { BILLERS } from '../mock-billers';
import { Biller } from '../model/biller';

import {AppSettings } from '../app.settings';
import {Observable } from 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class BillerService {

  constructor( private http : HttpClient) { }

  getBillers(): Observable<Biller[]> {
    //return BILLERS;
    return this.http.get<Biller[]> (AppSettings.API_ENDPOINT + '/billers').retry(3);
  }

  addBiller(biller: Biller): Observable<Biller> {
    //BILLERS.push(biller);
    return this.http.post<Biller>(AppSettings.API_ENDPOINT + '/biller',biller)
  }

  updateBiller(biller:Biller): Observable<Biller>{
    return this.http.put<Biller>(AppSettings.API_ENDPOINT +'/biller/' + biller.id,biller);
  }

  removeBiller(biller: Biller): Observable<any> {
/*     const index = BILLERS.indexOf(biller);
    if (index != -1) {
      BILLERS.splice(index, 1);
    } else {
      console.log("unable to remove " + biller + "BILLERS array.");
    }    */ 
    return this.http.delete(AppSettings.API_ENDPOINT +'/biller/'+biller.id)
  }
}