import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentlikeComponent } from './commentlike.component';

describe('CommentlikeComponent', () => {
  let component: CommentlikeComponent;
  let fixture: ComponentFixture<CommentlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
