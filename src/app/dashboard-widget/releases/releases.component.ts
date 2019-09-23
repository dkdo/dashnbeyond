import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.scss']
})
export class ReleasesComponent implements OnInit {
  @Input()
  Project;

  constructor() { }

  ngOnInit() {
  }

}
