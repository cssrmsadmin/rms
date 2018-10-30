import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TADashboardComponent } from './ta-dashboard.component';

describe('TADashboardComponent', () => {
  let component: TADashboardComponent;
  let fixture: ComponentFixture<TADashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TADashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
