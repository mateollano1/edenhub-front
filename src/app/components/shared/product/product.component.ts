import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ej: string = "paula"
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  saluda() {
    console.log("de");

  }
  moreDetails() {
    let ej = "pau"
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
      html: `<div (click)="saluda()" class="card" style="width: 12em; height:12em; ">${ej}</div>`
    })
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
 * @ignore
 */
  // To open modal to download the app
  openCentred(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
 * @ignore
 */
  // To open modal to download the app
  openSmall(content) {
    this.modalService.open(content, {
      size: 'sm'
    });
  }

  /**
 * @ignore
 */
  // To open modal to download the app
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
