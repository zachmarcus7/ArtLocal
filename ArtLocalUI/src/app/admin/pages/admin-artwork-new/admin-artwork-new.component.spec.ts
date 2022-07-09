import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtworkNewComponent } from './admin-artwork-new.component';

describe('AdminArtworkNewComponent', () => {
  let component: AdminArtworkNewComponent;
  let fixture: ComponentFixture<AdminArtworkNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtworkNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtworkNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
