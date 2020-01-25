import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApartComponent } from './view-apart.component';

describe('ViewApartComponent', () => {
  let component: ViewApartComponent;
  let fixture: ComponentFixture<ViewApartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
