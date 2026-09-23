import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionCardComponent } from './profile-section-card.component';

describe('ProfileSectionCardComponent', () => {
  let component: ProfileSectionCardComponent;
  let fixture: ComponentFixture<ProfileSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
