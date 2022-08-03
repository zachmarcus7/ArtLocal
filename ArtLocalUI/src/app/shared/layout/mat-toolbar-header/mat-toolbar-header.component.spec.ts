import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarHeaderComponent } from './mat-toolbar-header.component';

describe('MatToolbarHeaderComponent', () => {
  let component: MatToolbarHeaderComponent;
  let fixture: ComponentFixture<MatToolbarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatToolbarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatToolbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
