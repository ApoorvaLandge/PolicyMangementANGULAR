import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStoreComponent } from './group-store.component';

describe('GroupStoreComponent', () => {
  let component: GroupStoreComponent;
  let fixture: ComponentFixture<GroupStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupStoreComponent]
    });
    fixture = TestBed.createComponent(GroupStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
