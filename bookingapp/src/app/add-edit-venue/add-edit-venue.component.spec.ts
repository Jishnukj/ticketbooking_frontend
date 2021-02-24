import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVenueComponent } from './add-edit-venue.component';

describe('AddEditVenueComponent', () => {
  let component: AddEditVenueComponent;
  let fixture: ComponentFixture<AddEditVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
