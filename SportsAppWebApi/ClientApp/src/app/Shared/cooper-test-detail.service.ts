import { Injectable } from '@angular/core';
import { CooperTestDetail } from './cooper-test-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CooperTestDetailService {
  data: CooperTestDetail;
  readonly rootUrl = 'http://localhost:5000/api';
  list: CooperTestDetail[];
  constructor(private http: HttpClient) {
  }

  postCooperTestDetail() {
    return this.http.post(this.rootUrl + "/CooperTestDetail", this.data);
  }

  viewCooperTestDetailData() {
    this.http.get(this.rootUrl + "/CooperTestDetail")
      .toPromise()
      .then(res => this.list = res as CooperTestDetail[]);
  }

  PutCooperTestDetail() {
    return this.http.put(this.rootUrl + "/CooperTestDetail/" + this.data.Id, this.data);
  }
  DeleteCooperTestDetail(Id) {
    return this.http.delete(this.rootUrl + "/CooperTestDetail/" + Id);
  }

  GetCooperTestDetail(Id) {
    return this.http.get(this.rootUrl + "/CooperTestDetail/" + Id)
      .toPromise()
      .then(res => this.data = res as CooperTestDetail);
  }
}
