import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewEncapsulation } from '@angular/core';

import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { OktaConfigService } from 'app/shared/okta/okta-config.service';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StartComponent implements OnInit {
  private authService = new OktaAuth(this.OktaSDKAuthService.config);

  strUserSession: Boolean;

  arrAccessToken;
  arrTokens;
  thisUser;

  constructor(
    public OktaConfigService: OktaConfigService,
    private OktaSDKAuthService: OktaSDKAuthService
  ) { }

  async ngOnInit() {
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
        this.arrTokens = await JSON.parse(localStorage.getItem('okta_jwt_custom_2'));
        console.log(this.arrTokens)
        this.arrAccessToken = await this.arrTokens.accessToken;
        this.thisUser = await this.arrAccessToken.claims.sub
        console.log(this.arrAccessToken)
        break;
    }
  }

}
