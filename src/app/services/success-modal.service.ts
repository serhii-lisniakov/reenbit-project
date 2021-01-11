import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessModalService {
  public visible = new BehaviorSubject<boolean>(false);
  constructor() { }
}
