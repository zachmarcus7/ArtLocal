import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtworkExistingComponent } from './admin-artwork-existing.component';

describe('AdminArtworkExistingComponent', () => {
  let component: AdminArtworkExistingComponent;
  let fixture: ComponentFixture<AdminArtworkExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtworkExistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtworkExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
