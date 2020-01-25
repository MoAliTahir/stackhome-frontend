import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartRequestComponent } from './apart-request.component';

describe('ApartRequestComponent', () => {
  let component: ApartRequestComponent;
  let fixture: ComponentFixture<ApartRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
