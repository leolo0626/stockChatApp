import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerCardForHeaderBarComponent } from './ticker-card-for-header-bar.component';

describe('TickerCardForHeaderBarComponent', () => {
  let component: TickerCardForHeaderBarComponent;
  let fixture: ComponentFixture<TickerCardForHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerCardForHeaderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickerCardForHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
