import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxListComponent } from './tax-list.component';

describe('TaxListComponent', () => {
  let component: TaxListComponent;
  let fixture: ComponentFixture<TaxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxListComponent]
    });
    fixture = TestBed.createComponent(TaxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
