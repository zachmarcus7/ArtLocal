import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtstyleEditComponent } from './admin-artstyle-edit.component';

describe('AdminArtstyleEditComponent', () => {
  let component: AdminArtstyleEditComponent;
  let fixture: ComponentFixture<AdminArtstyleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtstyleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtstyleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
