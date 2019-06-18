import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CooperTest } from './cooper-test.model';
@Injectable()
export class CooperTestService {
  formData: CooperTest;
  readonly rootUrl = 'http://localhost:5000/api';
  list: CooperTest[]; 
  constructor(private http: HttpClient) {
  }

  postCooperTest(formData: CooperTest) {
    return this.http.post(this.rootUrl + "/CooperTest", formData);
  }

  viewCooperTestData() {
    this.http.get(this.rootUrl + "/CooperTest")
    .toPromise()
    .then(res => this.list = res as CooperTest[]);
  }

  DeleteCooperTest(Id) {
    return this.http.delete(this.rootUrl + "/CooperTest/" + Id);
  }
}
