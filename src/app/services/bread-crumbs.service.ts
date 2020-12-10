import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {
  public title = new BehaviorSubject('');
  constructor() { }
}
