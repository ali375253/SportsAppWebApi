import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCooperTestComponent } from './view-cooper-test.component';

describe('ViewCooperTestComponent', () => {
  let component: ViewCooperTestComponent;
  let fixture: ComponentFixture<ViewCooperTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCooperTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCooperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
