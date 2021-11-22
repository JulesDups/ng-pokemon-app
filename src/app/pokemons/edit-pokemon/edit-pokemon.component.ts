import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(private route:ActivatedRoute, private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this._pokemonService.getPokemonById(+this.route.snapshot.params.id).subscribe(value => {
      this.pokemon = value;
    });
  }

}
