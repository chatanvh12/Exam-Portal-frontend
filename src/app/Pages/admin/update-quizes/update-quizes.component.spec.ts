import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizesComponent } from './update-quizes.component';

describe('UpdateQuizesComponent', () => {
  let component: UpdateQuizesComponent;
  let fixture: ComponentFixture<UpdateQuizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQuizesComponent]
    });
    fixture = TestBed.createComponent(UpdateQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
