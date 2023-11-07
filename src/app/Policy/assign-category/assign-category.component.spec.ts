import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCategoryComponent } from './assign-category.component';

describe('AssignCategoryComponent', () => {
  let component: AssignCategoryComponent;
  let fixture: ComponentFixture<AssignCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignCategoryComponent]
    });
    fixture = TestBed.createComponent(AssignCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
