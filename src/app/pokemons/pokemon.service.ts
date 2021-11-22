import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class PokemonService {

  private readonly url = 'api/pokemons';
  private readonly opts = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };
  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      this.url
    )
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      this.url + `/${id}`
    )
  }

  public searchPokemons(term: string) : Observable<Pokemon[]> {
    if(!term.trim()) return of([]);
    return this.http.get<Pokemon[]>(`${this.url}?name=${term}`);
  }

  public getPokemonTypes(): string[] {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }

  public updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(this.url, pokemon, this.opts);
  }

  public deletePokemon(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + `/${id}`);
  }
}
