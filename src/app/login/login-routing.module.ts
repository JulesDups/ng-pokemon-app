import {RouterModule} from '@angular/router';
import {AuthService} from '../auth.service';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule {}
