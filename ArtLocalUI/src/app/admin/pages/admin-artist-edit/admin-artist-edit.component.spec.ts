import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistEditComponent } from './admin-artist-edit.component';

describe('AdminArtistEditComponent', () => {
  let component: AdminArtistEditComponent;
  let fixture: ComponentFixture<AdminArtistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
