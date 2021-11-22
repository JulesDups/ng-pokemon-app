import {Component} from '@angular/core';

@Component({
  template:`
    <h1 class="center" style="color:#fff">ERROR 404 : PAGE NOT FOUND</h1>
    <a style="top:50%;left:50%;transform: translate(-50%,-50%);margin-top:10vh" class="waves-effect waves-light btn-large" [routerLink]="'pokemon/all'">Retour</a>
  `,
})

export class PageNotFoundComponent {

}
