import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {
  companies: any[]
  loading: boolean = true
  constructor(
    private companiesService: CompaniesService,
    private router: Router
  ) {
    sessionStorage.setItem("ad", "false")
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    this.getCompaniesPresentation()
  }
  search(word) {
    // console.log(word);
    this.router.navigateByUrl(`search?q=${word}`)
  }
  getCompaniesPresentation() {
    this.companiesService.getCompaniesPresentation().subscribe((data: any) => {
      this.companies = data['companies']
      this.loading = false
      console.log(this.companies);
      
    })
  }

}
