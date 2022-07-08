import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtworkEditComponent } from './admin-artwork-edit.component';

describe('AdminArtworkEditComponent', () => {
  let component: AdminArtworkEditComponent;
  let fixture: ComponentFixture<AdminArtworkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtworkEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtworkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
