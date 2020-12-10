import { Injectable } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {
  public crumbs = new BehaviorSubject([]);
  public title = new BehaviorSubject('');
  constructor(private router: Router) { }

  routeSubscribe(): void {
    this.router.events.subscribe(event => {
      if (event instanceof ChildActivationStart) {
        this.crumbs.next(event.snapshot.data.crumbs);
      }
    });
  }
}
