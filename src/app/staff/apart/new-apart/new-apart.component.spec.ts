import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApartComponent } from './new-apart.component';

describe('NewApartComponent', () => {
  let component: NewApartComponent;
  let fixture: ComponentFixture<NewApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
