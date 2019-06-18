import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CooperTestDetail } from '../Shared/cooper-test-detail.model';
import { CooperTestDetailService } from '../Shared/cooper-test-detail.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cooper-test-details',
  templateUrl: './edit-cooper-test-details.component.html',
  styleUrls: ['./edit-cooper-test-details.component.css']
})
export class EditCooperTestDetailsComponent implements OnInit {

  constructor(private service2: CooperTestDetailService, public http: Http, private _router: Router, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.resetForm();
    this.service2.GetCooperTestDetail(id);
  }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service2.data = {
      Id: 0,
      UsersId: 0,
      Result: '',
      CooperTestId: 0
    }
  }
  onSubmit(details: NgForm) {
    this.service2.PutCooperTestDetail().subscribe(
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
