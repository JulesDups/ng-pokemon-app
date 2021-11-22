import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() {

  }

  login(login: string, pwd: string) {
    let isLoggedIn = (login === 'admin' && pwd === 'admin');
    return of(true).pipe(delay(1000),
      tap(() => {
        this.isLoggedIn = isLoggedIn;
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
