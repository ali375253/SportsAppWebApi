import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddCooperTestComponent } from './add-cooper-test/add-cooper-test';
import { CooperTestService } from './Shared/cooper-test.service';
import { ViewCooperTestComponent } from './view-cooper-test/view-cooper-test.component';
import { HttpModule } from '@angular/http';
import { AddCooperTestDetailsComponent } from './add-cooper-test-details/add-cooper-test-details.component';
import { ViewCooperTestDetailsComponent } from './view-cooper-test-details/view-cooper-test-details.component';
import { CooperTestDetailService } from './Shared/cooper-test-detail.service';
import { EditCooperTestDetailsComponent } from './edit-cooper-test-details/edit-cooper-test-details.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './Shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddCooperTestComponent,
    ViewCooperTestComponent,
    AddCooperTestDetailsComponent,
    ViewCooperTestDetailsComponent,
    EditCooperTestDetailsComponent,
    ViewUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ViewCooperTestComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'add-cooper-test', component: AddCooperTestComponent },
      { path: 'view-cooper-test', component: ViewCooperTestComponent },
      { path: 'add-cooper-test-details', component: AddCooperTestDetailsComponent },
      { path: 'view-cooper-test-details', component: ViewCooperTestDetailsComponent },
      { path: 'edit-cooper-test-details/:id', component: EditCooperTestDetailsComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'view-user', component: ViewUserComponent }
    ])
  ],
  providers: [
    CooperTestService,
    CooperTestDetailService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
