import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadCrumbsService } from '../../services/bread-crumbs.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChildActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public title: string;
  public crumbs = new BehaviorSubject([]);

  constructor(private breadCrumbsService: BreadCrumbsService,
              private router: Router) { }

  ngOnInit(): void {
    this.routeSubscribe();

    this.breadCrumbsService.title.pipe(
      takeUntil(this.destroy$)
    ).subscribe(title => this.title = title.charAt(0).toUpperCase() + title.slice(1));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private routeSubscribe(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe(event => {
      if (event instanceof ChildActivationStart) {
        this.crumbs.next(event.snapshot.data.crumbs);
      }
    });
  }
}
