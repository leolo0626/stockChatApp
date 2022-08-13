import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAvatarWithIdentityDisplayComponent } from './personal-avatar-with-identity-display.component';

describe('PersonalAvatarWithIdentityDisplayComponent', () => {
  let component: PersonalAvatarWithIdentityDisplayComponent;
  let fixture: ComponentFixture<PersonalAvatarWithIdentityDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAvatarWithIdentityDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalAvatarWithIdentityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
