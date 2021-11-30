import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRoomComponent } from './standard-room.component';

describe('StandardRoomComponent', () => {
  let component: StandardRoomComponent;
  let fixture: ComponentFixture<StandardRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
