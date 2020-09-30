import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../../../../services/companies.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  companies: any[]

  constructor(private companiesService: CompaniesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCompaniesPresentation()
  }
  getCompaniesPresentation() {
    this.companiesService.getCompaniesPresentation().subscribe((data: any) => {
      this.companies = data['companies']

    })
  }

}
