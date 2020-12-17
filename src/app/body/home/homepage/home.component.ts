import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public isActive = false;
  public ifRegister = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public toggleModal(): void {
    this.isActive = !this.isActive;
  }

  public auth(): void {
    if (this.form.valid) {
      this.isActive = false;
      const user = {
        id: new Date().getTime().toString(),
        ...this.form.value
      };
      if (this.ifRegister) {
        this.authService.register(user).then();
      } else {
        this.authService.auth(user).then();
      }
    }
  }

  public changeTab(): void {
    this.ifRegister = !this.ifRegister;
  }
}
