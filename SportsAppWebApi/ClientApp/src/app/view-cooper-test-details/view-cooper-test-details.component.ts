import { Component, OnInit } from '@angular/core';
import { CooperTestDetailService } from '../Shared/cooper-test-detail.service';
import { Http } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { CooperTestDetail } from '../Shared/cooper-test-detail.model';

@Component({
  selector: 'app-view-cooper-test-details',
  templateUrl: './view-cooper-test-details.component.html',
  styleUrls: ['./view-cooper-test-details.component.css']
})
export class ViewCooperTestDetailsComponent implements OnInit {

  constructor(private service: CooperTestDetailService, public http: Http, private _router: Router) {
    this.service.viewCooperTestDetailData();
  }

  ngOnInit() {
    this.service.viewCooperTestDetailData();
  }

  editForm(content: CooperTestDetail) {
    this._router.navigate(['edit-cooper-test-details/' + content.Id]);
  }

  onDelete(Id) {
    if (confirm("Are you sure to delete this record?")) {
      this.service.DeleteCooperTestDetail(Id)
        .subscribe(res => {
          this.service.viewCooperTestDetailData();
        },
          err => {
            console.log(err);
          });
    }
  }

}
