import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  public isCartFormDirty: boolean;
  constructor() { }
}
