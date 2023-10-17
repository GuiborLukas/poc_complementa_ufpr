import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfRegisterComponent } from './self-register.component';

describe('SelfRegisterComponent', () => {
  let component: SelfRegisterComponent;
  let fixture: ComponentFixture<SelfRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfRegisterComponent]
    });
    fixture = TestBed.createComponent(SelfRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
