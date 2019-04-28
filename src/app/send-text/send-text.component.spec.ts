import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTextComponent } from './send-text.component';

describe('SendTextComponent', () => {
  let component: SendTextComponent;
  let fixture: ComponentFixture<SendTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
