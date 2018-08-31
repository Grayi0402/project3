
//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AdminModule} from './admin/admin.module'
import { UserModule } from './user/user.module'
//Compnent
import { AppComponent } from './app.component';

import { LoginToRoleComponent } from './login/login-to-role.component'

//service
import {appRoutes} from './app.routes';
import { LogginService} from './loggin.service'
import { LoginGuard } from './AdminLogin.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginToRoleComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    UserModule,
  

    RouterModule.forRoot(appRoutes),
  ],
  providers: [LogginService,LoginGuard],
  exports: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
