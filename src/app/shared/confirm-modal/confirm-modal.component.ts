import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ConfirmModalService } from '../../services/confirm-modal.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ConfirmModalData } from '../../models/confirm-modal-data.model';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public visible: boolean;
  public title: ConfirmModalData;
  @Output() confirm = new EventEmitter<ConfirmModalData>();

  constructor(private modalConfirm: ConfirmModalService) { }

  ngOnInit(): void {
    this.subscribeToShowStatus();
    this.subscribeToModalTitle();
  }

  private subscribeToShowStatus(): void {
    this.modalConfirm.visible.pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.visible = value);
  }

  private subscribeToModalTitle(): void {
    this.modalConfirm.title.pipe(takeUntil(this.destroy$))
      .subscribe((title: ConfirmModalData) => this.title = title);
  }

  public onConfirm(userResponse: boolean): void {
    const response = {
      userResponse,
      prop: this.title.prop
    };
    this.confirm.emit(response);
    this.modalConfirm.visible.next(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
