import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agile-metrics',
  templateUrl: './agile-metrics.component.html',
  styleUrls: ['./agile-metrics.component.scss']
})
export class AgileMetricsComponent implements OnInit {

  @Input()
  Project;

  constructor() { }

  ngOnInit() {
  }

}
