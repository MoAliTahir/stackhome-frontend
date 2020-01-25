import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRequestComponent } from './room-request.component';

describe('RoomRequestComponent', () => {
  let component: RoomRequestComponent;
  let fixture: ComponentFixture<RoomRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
