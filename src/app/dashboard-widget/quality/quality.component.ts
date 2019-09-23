import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.scss']
})
export class QualityComponent implements OnInit {
  @Input()
  Project;

  constructor() { }

  ngOnInit() {
  }

}
