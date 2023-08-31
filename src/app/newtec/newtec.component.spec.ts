import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtecComponent } from './newtec.component';

describe('NewtecComponent', () => {
  let component: NewtecComponent;
  let fixture: ComponentFixture<NewtecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewtecComponent]
    });
    fixture = TestBed.createComponent(NewtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
