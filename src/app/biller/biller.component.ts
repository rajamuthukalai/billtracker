import { Component, OnInit } from '@angular/core';
import { Biller } from '../model/biller';
import { BILLERS } from '../mock-billers';
import { Bill } from '../model/bill';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { BillerService } from '../service/biller.service';

@Component({
  selector: 'app-biller',
  templateUrl: './biller.component.html',
  styleUrls: ['./biller.component.css']
})
export class BillerComponent implements OnInit {

  constructor(private billerService: BillerService) { }

  ngOnInit() {
    this.getBillers();
  }

  error: String;

  biller: Biller = new Biller();
  
  billers: Biller[];
  
  selectedBiller: Biller;
  
  onSelect(biller: Biller) {
    this.selectedBiller = Object.assign({},biller);
  }
  
  getBillers(): void {
   this.billerService.getBillers().subscribe(
     data =>  this.billers = data,
     (err: HttpErrorResponse) => {
       if (err.error instanceof Error) {
         // client side error
         console.log('Client side error occurred: ', err.error.message)
       } else {
         // server side error
         console.log('Server side error occurred, error code: ${err.status}, body: ${err.error}');
       }
     }
    );
  }
    
  addBiller(newBiller: String): void {
    if (!this.biller.name || this.biller.name == '') {
      this.error = "New biller can not be blank!";
      return;
    }
    this.billerService.addBiller(this.biller).subscribe(data => 
      {
        this.billers.push(data);
        this.biller.name='';
      });
  }


  updateBiller(): void {
    if (!this.selectedBiller.name || this.selectedBiller.name == '') {
      this.error = "Category can not be blank!";
      return;
    }
    this.billerService.updateBiller(this.selectedBiller).subscribe(data => 
      {
        this.selectedBiller = undefined;
        this.getBillers();
      });
  }
  
  removeBiller(biller: Biller): void {
    this.billerService.removeBiller(biller).subscribe(()=> this.getBillers() );
  }
}