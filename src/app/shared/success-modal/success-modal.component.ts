import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SuccessModalService } from '../../services/success-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  private destroy$ = new Subject();
  public visible: boolean;

  constructor(
    private modalService: SuccessModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeToShowStatus();
  }

  private subscribeToShowStatus(): void {
    this.modalService.visible.pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.visible = value);
  }

  public closeModal(): void {
    this.modalService.visible.next(false);
    this.router.navigateByUrl('products').then();
  }
}
