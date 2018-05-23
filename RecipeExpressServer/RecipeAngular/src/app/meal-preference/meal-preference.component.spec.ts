import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPreferenceComponent } from './meal-preference.component';

describe('MealPreferenceComponent', () => {
  let component: MealPreferenceComponent;
  let fixture: ComponentFixture<MealPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
