import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefprofileComponent } from './chefprofile.component';

describe('ChefprofileComponent', () => {
  let component: ChefprofileComponent;
  let fixture: ComponentFixture<ChefprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
