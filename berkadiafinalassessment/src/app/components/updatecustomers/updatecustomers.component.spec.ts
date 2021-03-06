import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomersComponent } from './updatecustomers.component';

describe('updatecustomersComponent', () => {
  let component: AddcustomersComponent;
  let fixture: ComponentFixture<AddcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
