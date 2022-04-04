import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaConfigService } from 'app/shared/okta/okta-config.service';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {
  private authService = new OktaAuth(this.OktaSDKAuthService.config);

  strUserSession: Boolean;

  constructor(
    public OktaConfigService: OktaConfigService,
    private OktaSDKAuthService: OktaSDKAuthService
  ) { }

  async ngOnInit() {
    localStorage.removeItem('okta_jwt_quicktest_2');
    this.authService.token.getUserInfo()
      .then(function (user) {
        console.log(user)
      })
    this.strUserSession = await this.authService.session.exists()
      .then(function (exists) {
        if (exists) {
          // logged in
          return exists
        } else {
          // not logged in
          return exists
        }
      });
    switch (this.strUserSession == true) {
      case false:
        await window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true:
        // User is logged in
        break;
    }
  }

}
