import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuestionsComponent } from './view-auestions.component';

describe('ViewAuestionsComponent', () => {
  let component: ViewAuestionsComponent;
  let fixture: ComponentFixture<ViewAuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAuestionsComponent]
    });
    fixture = TestBed.createComponent(ViewAuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
