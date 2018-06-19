import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserService } from './common/services/user/user.service';
import { HeaderComponent } from './header/header.component';
import { CanActivateAuthentication } from './common/guards/authentication-can-activate/authentication-can-activate.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [UserService, CanActivateAuthentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
