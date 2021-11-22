import { Component, OnInit } from '@angular/core';
import { Pokemon } from "./pokemon";
import { Router } from '@angular/router';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html'
})

export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private router: Router, private _pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this._pokemonService.getPokemons().subscribe(values => {
       this.pokemons = values;
    }, err => {
      alert(err);
    } );
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log('Vous avez selectionné ' + pokemon.name);
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
