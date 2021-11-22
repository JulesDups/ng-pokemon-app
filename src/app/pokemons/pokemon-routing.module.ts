import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {ListPokemonsComponent} from './list-pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';
import {AuthGuardService} from '../auth-guard.service';

const pokemonRoutes: Routes = [
  {
    path: 'pokemon', canActivate: [AuthGuardService],
    children: [
      {
        path: 'all',
        component: ListPokemonsComponent
      },
      {
        path: 'edit/:id',
        component: EditPokemonComponent
      },
      {
        path: ':id',
        component: DetailPokemonComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule {

}
