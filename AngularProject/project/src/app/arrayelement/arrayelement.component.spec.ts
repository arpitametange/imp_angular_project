import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayelementComponent } from './arrayelement.component';

describe('ArrayelementComponent', () => {
  let component: ArrayelementComponent;
  let fixture: ComponentFixture<ArrayelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayelementComponent]
    });
    fixture = TestBed.createComponent(ArrayelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
