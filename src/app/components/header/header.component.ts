import { Component, OnInit } from '@angular/core';
import {Event, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeRoute = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .forEach( e => {
          this.activeRoute  = this.router.url;
        }
      );
  }

}
