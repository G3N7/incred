import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEntrantsComponent } from './all-entrants.component';

describe('AllEntrantsComponent', () => {
  let component: AllEntrantsComponent;
  let fixture: ComponentFixture<AllEntrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEntrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEntrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
