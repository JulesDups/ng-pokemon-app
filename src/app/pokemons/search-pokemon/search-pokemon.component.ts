import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor(private router: Router ,private _pokemonService: PokemonService) { }

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // delay
      debounceTime(300),
      //ignore
      distinctUntilChanged(),
      //results
      switchMap((term: string) => this._pokemonService.searchPokemons(term))
    )
  }

  searchPokemon(input: string) {
    this.searchTerms.next(input);
  }

  selectPokemon(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}
