import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPostCardComponentComponent } from './social-media-post-card-component.component';

describe('SocialMediaPostCardComponentComponent', () => {
  let component: SocialMediaPostCardComponentComponent;
  let fixture: ComponentFixture<SocialMediaPostCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPostCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaPostCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
