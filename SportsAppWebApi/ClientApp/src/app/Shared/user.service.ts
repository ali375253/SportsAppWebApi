import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

  formData: User;
  readonly rootUrl = 'http://localhost:5000/api';
  list: User[];
  constructor(private http: HttpClient) {
  }

  postUser(formData: User) {
    return this.http.post(this.rootUrl + "/User", formData);
  }

  viewUserData() {
    this.http.get(this.rootUrl + "/User")
      .toPromise()
      .then(res => this.list = res as User[]);
  }

  DeleteUser(Id) {
    return this.http.delete(this.rootUrl + "/User/" + Id);
  }

}
