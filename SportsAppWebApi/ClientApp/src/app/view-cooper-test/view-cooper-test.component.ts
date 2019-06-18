import { Component, OnInit } from '@angular/core';
import { CooperTestService } from '../Shared/cooper-test.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-cooper-test',
  templateUrl: './view-cooper-test.component.html',
  styleUrls: ['./view-cooper-test.component.css']
})
export class ViewCooperTestComponent implements OnInit {

  constructor(private service: CooperTestService, public http: Http, private _router: Router) {
    this.service.viewCooperTestData();
  }

  ngOnInit() {
    this.service.viewCooperTestData();
  }

  onDelete(Id) {
    if (confirm("Are you sure to delete this record?")) {
      this.service.DeleteCooperTest(Id)
        .subscribe(res => {
          this.service.viewCooperTestData();
        },
          err => {
            console.log(err);
          });
    }
  }
}
