import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  // API url
  url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
  // API Key
  key = '&apikey=9MLIERF0KZM0ER33';
  constructor(private http: HttpClient) { }
  httpOtions = {
    // Set the format of data required from the API
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Method to use the GET HTTP call on the API to retrieve and return the data
  findAllStock(company): Observable<any> {
    const mainurl = this.url + company + this.key;
    return this.http.get<any>(mainurl);
  }
}
