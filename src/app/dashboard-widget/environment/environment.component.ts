import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss', '../card.scss']
})
export class EnvironmentComponent implements OnInit {

  @Input()
  Project;

  constructor() { }

  ngOnInit() {
  }

}
