import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {ResponsiveTableHelpers} from './helpers.data';
import {MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import {ProjectService} from './project.service';

@Component({
  selector: 'cdk-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  rows: Array<any> = [];
  showResponsiveTableCode;
  projects;

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  pageLength = 0;
  pageSize = 15;
  helpers = ResponsiveTableHelpers;
  @Input() status;
  @Input() actionStatus;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() sort = new EventEmitter();
  @Output() dup = new EventEmitter();

  constructor(private router: Router, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getRows();
    this.projectService.getProjects().subscribe((data: any) => {
      this.projects = data.Items.sort((a, b) => a.Id > b.Id);
    });
  }

  getRows() {
    for (var i = 0; i < this.pageSize; i++) {
      this.rows = [...this.rows, this.helpers.rows[i]];
    }
    this.pageLength = this.helpers.rows.length;
  }

  sortData(val) {
  }

  goToDashboard(projectId) {
    console.log(projectId);
    this.router.navigate(['/auth/dashboard'], {queryParams: {projectId}});
  }
}
