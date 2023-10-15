import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCardsComponent } from './square-cards.component';

describe('SquareCardsComponent', () => {
  let component: SquareCardsComponent;
  let fixture: ComponentFixture<SquareCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareCardsComponent]
    });
    fixture = TestBed.createComponent(SquareCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
