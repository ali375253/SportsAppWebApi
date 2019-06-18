import { Component, OnInit } from '@angular/core';
import { CooperTestService } from '../Shared/cooper-test.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-cooper-test',
  templateUrl: './add-cooper-test.html',
})
export class AddCooperTestComponent implements OnInit {

  constructor(private service: CooperTestService, public http: Http, private _router: Router) {
  }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Description:''
    }
  }
  onSubmit(form: NgForm) {
    this.service.postCooperTest(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
    this._router.navigate(['/view-cooper-test']);
  }
}
