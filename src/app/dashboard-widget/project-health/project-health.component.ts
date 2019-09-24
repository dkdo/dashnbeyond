import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-health',
  templateUrl: './project-health.component.html',
  styleUrls: ['./project-health.scss', '../card.scss']
})
export class ProjectHealthComponent implements OnInit {

  @Input()
  Project;
  constructor() { }

  ngOnInit() {
  }

}
