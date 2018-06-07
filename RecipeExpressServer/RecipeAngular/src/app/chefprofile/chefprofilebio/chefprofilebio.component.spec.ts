import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefprofilebioComponent } from './chefprofilebio.component';

describe('ChefprofilebioComponent', () => {
  let component: ChefprofilebioComponent;
  let fixture: ComponentFixture<ChefprofilebioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefprofilebioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefprofilebioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
