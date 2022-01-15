import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledashboardComponent } from './profiledashboard.component';

describe('ProfiledashboardComponent', () => {
  let component: ProfiledashboardComponent;
  let fixture: ComponentFixture<ProfiledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
