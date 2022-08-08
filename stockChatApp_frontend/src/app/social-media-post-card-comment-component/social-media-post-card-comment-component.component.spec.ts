import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPostCardCommentComponentComponent } from './social-media-post-card-comment-component.component';

describe('SocialMediaPostCardCommentComponentComponent', () => {
  let component: SocialMediaPostCardCommentComponentComponent;
  let fixture: ComponentFixture<SocialMediaPostCardCommentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPostCardCommentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaPostCardCommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
