import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import {QuickTestComponent} from 'app/quick-test/quick-test.component';
import { OktaWidgetService } from 'app/shared/okta/okta-widget.service';
import { OktaConfigService } from "app/shared/okta/okta-config.service";

@Component({
  selector: 'app-quick-test-widget',
  templateUrl: './quick-test-widget.component.html',
  styleUrls: ['./quick-test-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuickTestWidgetComponent implements OnInit {
  
  constructor(
    public OktaWidgetService:OktaWidgetService,
    private OktaConfig: OktaConfigService,
  ) { }

  async ngOnInit() {
    // await this.OktaWidgetService.quickTestLogin( this.OktaConfig.strScope, this.OktaConfig.testSIWRedirect);
   
  }

  
}
