import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerEditComponent } from './admin-customer-edit.component';

describe('AdminCustomerEditComponent', () => {
  let component: AdminCustomerEditComponent;
  let fixture: ComponentFixture<AdminCustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
