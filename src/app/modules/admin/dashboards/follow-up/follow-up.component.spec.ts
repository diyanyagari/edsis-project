import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpPageComponent } from './follow-up.component';

describe('SamplePageComponent', () => {
  let component: FollowUpPageComponent;
  let fixture: ComponentFixture<FollowUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
