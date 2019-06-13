import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-body',
  templateUrl: './company-body.component.html',
  styleUrls: ['./company-body.component.css']
})
export class CompanyBodyComponent implements OnInit {

  constructor(private router: Router) { }

  allDateData;

  ngOnInit() {
  }

  // Method to save the data entered by the user in the form and call the respective router link
  onSubmitData(event) {
    event.preventDefault();
    const symbol = (document.getElementById('name') as HTMLInputElement).value;

    // Call the router for next page and send the company symbol as url parameter
    this.router.navigate(['companySeach/details/' + symbol]);

  }

}
