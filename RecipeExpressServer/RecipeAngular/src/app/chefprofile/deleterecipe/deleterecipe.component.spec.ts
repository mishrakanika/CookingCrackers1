import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterecipeComponent } from './deleterecipe.component';

describe('DeleterecipeComponent', () => {
  let component: DeleterecipeComponent;
  let fixture: ComponentFixture<DeleterecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleterecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
