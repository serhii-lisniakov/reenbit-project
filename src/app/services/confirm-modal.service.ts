import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { confirmTitles } from '../shared/constant-lists/confirmation-titles.list';
import { ConfirmModalData } from '../models/confirm-modal-data.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  private titles = confirmTitles;
  public visible = new BehaviorSubject<boolean>(false);
  public title = new BehaviorSubject<ConfirmModalData>({ title: this.titles.default });

  constructor() { }

  public showDialog(value: string): void {
    this.visible.next(true);
    this.title.next({ title: this.titles[value], prop: value });
  }
}
