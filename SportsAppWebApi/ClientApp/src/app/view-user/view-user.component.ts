import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private service: UserService, public http: Http, private _router: Router) {
    this.service.viewUserData();
  }

  ngOnInit() {
    this.service.viewUserData();
  }

  onDelete(Id) {
    if (confirm("Are you sure to delete this record?")) {
      this.service.DeleteUser(Id)
        .subscribe(res => {
          this.service.viewUserData();
        },
          err => {
            console.log(err);
          });
    }
  }

}
