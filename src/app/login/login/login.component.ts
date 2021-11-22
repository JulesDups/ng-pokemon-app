import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, private router: Router) { }

  name: string;
  password: string;
  message: string = "Vous êtes déconnecté. (admin/admin)";

  setMessage() {
    this.message = this.authService.isLoggedIn ? 'Vous êtes connecté ! ' : 'Identifiant ou mot de passe incorrect !';
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }


}
