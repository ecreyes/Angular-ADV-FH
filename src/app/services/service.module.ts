import { NgModule } from "@angular/core";

import {
  SettingsService,
  SharedService,
  SidebarService
} from "./service.index";

@NgModule({
  declarations: [],
  exports: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  imports: []
})
export class ServiceModule {}
