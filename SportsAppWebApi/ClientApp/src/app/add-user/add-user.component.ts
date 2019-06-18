import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service: UserService, public http: Http, private _router: Router) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Firstname: '',
      Lastname: '',
      UserType:''
    }
  }
  onSubmit(form: NgForm) {
    this.service.postUser(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
    this._router.navigate(['/view-user']);
  }

}
