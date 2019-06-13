import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock.service';
import { Location } from '@angular/common';
import { StockOverView } from '../types/stockOverviewType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-stock-body',
  templateUrl: './company-stock-body.component.html',
  styleUrls: ['./company-stock-body.component.css']
})
export class CompanyStockBodyComponent implements OnInit {

  constructor(private stockService: StockService,
    private location: Location,
    private _Activatedroute: ActivatedRoute) { }

  symbol = null;
  allDateData = null;
  isHidden = false;
  companyStock: Array<StockOverView> = [];


  ngOnInit() {
    // Retrieve symbol from url
    this.symbol = this._Activatedroute.snapshot.paramMap.get('symbol');
    this.retrieveData();

  }

  // Method to call the service layer and get data returned by the api
  retrieveData() {
    this.stockService.findAllStock(this.symbol).subscribe(data => { this.allDateData = this.buildData(data); });
  }


  // method to format the recieved data from api layer to required format as needed by the view
  buildData(data) {
    // tslint:disable-next-line: forin
    for (const item in data['Time Series (Daily)']) {
      const stock: StockOverView = {
        stockDate: item,
        stockClose: data['Time Series (Daily)'][item]['4. close']
      };
      this.companyStock.push(stock);
      this.isHidden = true;
    }
  }


  goBack() {
    this.location.back();
  }
}
