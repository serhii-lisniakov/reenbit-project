import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadCrumbsService } from '../../services/bread-crumbs.service';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public crumbs: BreadCrumb[];
  public title: string;
  constructor(private breadCrumbsService: BreadCrumbsService) { }

  ngOnInit(): void {
    this.breadCrumbsService.routeSubscribe();
    this.breadCrumbsService.crumbs.pipe(
      takeUntil(this.destroy$)
    ).subscribe(crumbs => this.crumbs = crumbs);
    this.breadCrumbsService.title.pipe(
      takeUntil(this.destroy$)
    ).subscribe(title => this.title = title.charAt(0).toUpperCase() + title.slice(1));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
