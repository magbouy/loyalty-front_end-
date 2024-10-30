import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonymousReportsComponent } from './annonymous-reports.component';

describe('AnnonymousReportsComponent', () => {
  let component: AnnonymousReportsComponent;
  let fixture: ComponentFixture<AnnonymousReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonymousReportsComponent]
    });
    fixture = TestBed.createComponent(AnnonymousReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
