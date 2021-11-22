import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonsComponent} from './list-pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon.component';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import {BorderCardDirective} from './border-card.directive';
import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonService} from './pokemon.service';
import {FormsModule} from '@angular/forms';
import {PokemonFormComponent} from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import {AuthGuardService} from '../auth-guard.service';

@NgModule({
  declarations: [
    ListPokemonsComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  providers: [
    PokemonService,
    AuthGuardService
  ]
})

export class PokemonModule {

}
