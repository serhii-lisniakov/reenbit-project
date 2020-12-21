import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
declare var FB: any;

@Component({
  selector: 'app-facebook-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.scss']
})
export class FacebookButtonComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initFacebookLogin();
  }

  private initFacebookLogin(): void {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId      : '408423610210198',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (((d, s, id): void => {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk'));
  }

  private checkLoginStatus(): void {
    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        FB.api(
          response.authResponse.userID,
          async apiResponse => {
            if (apiResponse && !apiResponse.error) {
              const localUser = {
                id: apiResponse.id,
                name: apiResponse.name,
                email: apiResponse.id
              };
              await this.setUser(localUser).then();
              FB.logout();
            }
          }
        );
      } else {
        alert('User login failed');
      }
    });
  }

  public submitLogin(): void {
    FB.login((response) => {
      if (response.authResponse) {
        this.checkLoginStatus();
      }
    });
  }

  private async setUser(user: User): Promise<void> {
    const users: User[] = await this.authService.getUsers();
    if (this.authService.checkIfUserExist(user.email, users)) {
      this.authService.auth(user).then();
    } else {
      this.authService.register(user).then();
    }
  }
}
