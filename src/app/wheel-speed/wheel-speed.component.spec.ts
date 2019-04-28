import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSpeedComponent } from './wheel-speed.component';

describe('WheelSpeedComponent', () => {
  let component: WheelSpeedComponent;
  let fixture: ComponentFixture<WheelSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
