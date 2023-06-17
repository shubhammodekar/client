import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalWarraperComponent } from './journal-warraper.component';

describe('JournalWarraperComponent', () => {
  let component: JournalWarraperComponent;
  let fixture: ComponentFixture<JournalWarraperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournalWarraperComponent]
    });
    fixture = TestBed.createComponent(JournalWarraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
