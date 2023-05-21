import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEmplyerComponent } from './creat-emplyer.component';

describe('CreatEmplyerComponent', () => {
  let component: CreatEmplyerComponent;
  let fixture: ComponentFixture<CreatEmplyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatEmplyerComponent]
    });
    fixture = TestBed.createComponent(CreatEmplyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
