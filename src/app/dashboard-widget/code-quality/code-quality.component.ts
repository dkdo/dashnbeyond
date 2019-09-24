import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'code-quality',
  templateUrl: './code-quality.component.html',
  styleUrls: ['./code-quality.component.scss', '../card.scss']
})
export class CodeQualityComponent implements OnInit {

  @Input()
  Project;
  constructor() { }

  ngOnInit() {
  }

}
