import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent 
{
  public batches = [
    {"Name" : "PPA", "Duration" : "3 Months", "Fees" : 19500},
    {"Name" : "LB" ,"Duration" : "3.5 Months","Fees" : 20500 },
    {"Name" : "Python" ,"Duration" :"4 Months", "Fees" :21000 },
    {"Name" : "Angular", "Duration" : "4.5","Fees" : 21500},
  ];
}
