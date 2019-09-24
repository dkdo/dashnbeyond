import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.scss', '../card.scss']
})
export class QualityComponent implements OnInit {
  @Input()
  Project;

  constructor() { }

  ngOnInit() {
  }

}
