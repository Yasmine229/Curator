import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppolicymanagementComponent } from './grouppolicymanagement.component';

describe('GrouppolicymanagementComponent', () => {
  let component: GrouppolicymanagementComponent;
  let fixture: ComponentFixture<GrouppolicymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouppolicymanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppolicymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
