import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {
  companies: any []
  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.getCompaniesPresentation()
  }
  getCompaniesPresentation() {
    this.companiesService.getCompaniesPresentation().subscribe((data: any) => {
      this.companies = data['companies']
    })
  }

}
