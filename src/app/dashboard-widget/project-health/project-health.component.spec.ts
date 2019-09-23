import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHealthComponent } from './project-health.component';

describe('WeatherComponent', () => {
  let component: ProjectHealthComponent;
  let fixture: ComponentFixture<ProjectHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
