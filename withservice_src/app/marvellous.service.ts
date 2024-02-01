import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  constructor() { }

  GetBatches()
  {
     return [
      {"Name" : "PPA", "Duration" : "3 Months", "Fees" : 19500},
      {"Name" : "LB", "Duration" : "3.5 Months", "Fees" : 20500},
      {"Name" : "Python", "Duration" : "4 Months", "Fees" : 21000},
      {"Name" : "Angular", "Duration" : "4.5 Months", "Fees" : 20700},
     ];
  }
}
