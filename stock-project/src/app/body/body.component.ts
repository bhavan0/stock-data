import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) { }

  symbol: string;
  date: string;

  ngOnInit() {
  }
  submitData(event) {
    event.preventDefault();
    // Get the data entered in the form by the user
    this.symbol = (document.getElementById('symbol') as HTMLInputElement).value;
    this.date = (document.getElementById('date') as HTMLInputElement).value;

    // Convert the date format to send through router link
    this.date = this.date.replace('/', '-');
    this.date = this.date.replace('/', '-');

    // Send the Data to the Router Link which displays the stock details
    this.router.navigate(['body/details/' + this.symbol + '/' + this.date]);
  }

}
