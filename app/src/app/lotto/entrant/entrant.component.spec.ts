import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrantComponent } from './entrant.component';

describe('EntrantComponent', () => {
  let component: EntrantComponent;
  let fixture: ComponentFixture<EntrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
