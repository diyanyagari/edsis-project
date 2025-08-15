import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { IconService } from './shared/services/icon.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, SharedModule, AppComponent],
  bootstrap: [],
})
export class AppModule {
  constructor(iconService: IconService) {
    iconService.registerIcons();
  }
}
