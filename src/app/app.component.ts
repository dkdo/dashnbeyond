import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {
  }

  ngOnInit() {
    window.addEventListener('message', (event) => {

      let words: string[];
      console.log(event);
      if (typeof event.data === 'string' && event.data.includes('/auth/dashboard?projectId=')) {
        words = event.data.split('=');
        this.router.navigate(['/auth/dashboard'], {queryParams: {projectId: words[1]}});
      }
    });
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
