import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router,
              private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._pokemonService.getPokemons().subscribe(values => {
      this.pokemons = values;
    });
     this._pokemonService.getPokemonById(+this.route.snapshot.params.id).subscribe(value => {
       this.pokemon = value;
     });
  }

  goBack() {
    this.router.navigate(['pokemon/all']);
  }

  goEdit() {
    this.router.navigate(['/pokemon/edit', this.pokemon.id]);
  }

  goDelete() {
    this._pokemonService.deletePokemon(this.pokemon.id).subscribe(() => {
      this.goBack();
    })
  }
}
