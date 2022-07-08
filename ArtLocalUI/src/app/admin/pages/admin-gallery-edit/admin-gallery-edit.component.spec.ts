import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGalleryEditComponent } from './admin-gallery-edit.component';

describe('AdminGalleryEditComponent', () => {
  let component: AdminGalleryEditComponent;
  let fixture: ComponentFixture<AdminGalleryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGalleryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGalleryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
