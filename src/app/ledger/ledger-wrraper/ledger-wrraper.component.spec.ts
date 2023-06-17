import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerWrraperComponent } from './ledger-wrraper.component';

describe('LedgerWrraperComponent', () => {
  let component: LedgerWrraperComponent;
  let fixture: ComponentFixture<LedgerWrraperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedgerWrraperComponent]
    });
    fixture = TestBed.createComponent(LedgerWrraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
