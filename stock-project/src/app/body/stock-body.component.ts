import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock.service';
import { Stock } from '../types/stockType';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-body',
  templateUrl: './stock-body.component.html',
  styleUrls: ['./stock-body.component.css']
})
export class StockBodyComponent implements OnInit {

  constructor(private stockService: StockService,
    private _Activatedroute: ActivatedRoute,
    private location: Location) { }

  symbol: string;

  apiData = null;
  requiredStockData: Stock = null;
  previousSymbol: string = null;
  previousDate: Date;
  inputDate: string;

  ngOnInit() {
    // Retrieve the data sent from the router link
    this.symbol = this._Activatedroute.snapshot.paramMap.get('symbol');
    this.inputDate = this._Activatedroute.snapshot.paramMap.get('date');

    // Convert the date format to required form for comparison
    this.inputDate = this.inputDate.replace('/', '-');
    this.inputDate = this.inputDate.replace('/', '-');

    // Method to be called to initital values required by the view
    this.recieveInputData();

  }

  // Method to format the recieved data from the api layer to required result
  RetriveData() {
    // If stock doesnt exist for the specified date change to previous date till data is available
    while (this.apiData['Time Series (Daily)'][this.inputDate] == undefined) {
      const temp = this.toDate(this.inputDate);
      temp.setDate(temp.getDate() - 1);
      this.inputDate = new Date(temp.getTime() - (temp.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    }

    const stockOnDate = this.apiData['Time Series (Daily)'][this.inputDate];
    const tempStock: Stock = {
      symbol: this.apiData['Meta Data']['2. Symbol'],
      stockOpen: stockOnDate['1. open'],
      stockClose: stockOnDate['4. close'],
      stockLow: stockOnDate['3. low'],
      stockHigh: stockOnDate['2. high'],
      date: this.inputDate
    };
    this.requiredStockData = tempStock;   // holds the required data by the view

  }

  // Method to Convert string to date format
  private toDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return new Date(year, month - 1, day);
  }

  // Method to call the Service Layer to retrieve data
  recieveInputData() {
    const now = new Date();

    // Check if the previous call was for the same company-use the saved old data in case of same company being called in sequence
    if (this.apiData == null || this.previousSymbol != this.symbol || this.previousDate != now) {
      this.stockService.findAllStock(this.symbol).subscribe(data => { this.apiData = data; this.RetriveData(); });
      this.previousSymbol = this.symbol;
      this.previousDate = now;
    } else {
      this.RetriveData();
    }
  }

  // Method to go back to the previous page
  goBack() {
    this.location.back();
  }

}
