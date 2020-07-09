import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { SessionExpirationComponent } from './components/session-expiration/session-expiration.component';
import { LogoutProcessComponent } from './components/logout-process/logout-process.component';
import { RecoveryValuesComponent } from './components/recovery-values/recovery-values.component';

import { CookieService } from '../app/services/cookie.service';
import { MessageService } from '../app/services/message.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordManagementComponent,
    SessionExpirationComponent,
    LogoutProcessComponent,
    RecoveryValuesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
