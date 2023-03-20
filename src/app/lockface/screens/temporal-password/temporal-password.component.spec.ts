import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalPasswordComponent } from './temporal-password.component';

describe('TemporalPasswordComponent', () => {
  let component: TemporalPasswordComponent;
  let fixture: ComponentFixture<TemporalPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporalPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporalPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
