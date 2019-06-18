import { Component, OnInit } from '@angular/core';
import { CooperTestDetailService } from '../Shared/cooper-test-detail.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CooperTestDetail } from '../Shared/cooper-test-detail.model';

@Component({
  selector: 'app-add-cooper-test-details',
  templateUrl: './add-cooper-test-details.component.html',
  styleUrls: ['./add-cooper-test-details.component.css']
})
export class AddCooperTestDetailsComponent implements OnInit {
  constructor(private service2: CooperTestDetailService, public http: Http, private _router: Router) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service2.data = {
      Id: 0,
      UsersId: 0,
      Result: '',
      CooperTestId:0
    }
  }
  onSubmit(details: NgForm) {
    console.log(details.value);
    this.service2.postCooperTestDetail().subscribe(
      res => {
        this.resetForm(details);
      },
      err => {
        console.log(err);
      }
    )
    this._router.navigate(['/view-cooper-test-details']);
  }
}
