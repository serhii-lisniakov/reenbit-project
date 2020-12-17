import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-auth-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {
  private user: gapi.auth2.GoogleUser;
  private gapiSetup: boolean;
  private authInstance: gapi.auth2.GoogleAuth;
  private error: any;

  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }

  async initGoogleAuth(): Promise<void> {
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '557051824434-sbsn8ndj800rhauervbq872eqi7fquvo.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return new Promise(async () => {
      const users: User[] = await this.authService.getUsers();
      await this.authInstance.signIn().then((user) => {
          this.user = user;
          const basicProfile = user.getBasicProfile();
          const localUser = {
            id: basicProfile.getId(),
            name: basicProfile.getName(),
            email: basicProfile.getEmail()
          };
          if (this.authService.checkIfUserExist(localUser.email, users)) {
            this.authService.auth(localUser);
          } else {
            this.authService.register(localUser);
          }
        },
        error => this.error = error);
    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return this.authInstance.isSignedIn.get();
  }
}
