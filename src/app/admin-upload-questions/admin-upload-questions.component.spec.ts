import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadQuestionsComponent } from './admin-upload-questions.component';

describe('AdminUploadQuestionsComponent', () => {
  let component: AdminUploadQuestionsComponent;
  let fixture: ComponentFixture<AdminUploadQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUploadQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
