import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostquizComponent } from './postquiz.component';

describe('PostquizComponent', () => {
  let component: PostquizComponent;
  let fixture: ComponentFixture<PostquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostquizComponent]
    });
    fixture = TestBed.createComponent(PostquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
