import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHiringComponent } from './add-new-hiring.component';

describe('AddNewHiringComponent', () => {
  let component: AddNewHiringComponent;
  let fixture: ComponentFixture<AddNewHiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
