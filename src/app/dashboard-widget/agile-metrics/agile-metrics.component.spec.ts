import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileMetricsComponent } from './agile-metrics.component';

describe('AgileMetricsComponent', () => {
  let component: AgileMetricsComponent;
  let fixture: ComponentFixture<AgileMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
