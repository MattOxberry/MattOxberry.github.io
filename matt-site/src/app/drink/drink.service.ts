import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  drink: string[] = [];

  constructor(
    private drinkService: DrinkService,
    private http: HttpClient) { }

    private cocktailDBUrl = 'https://www.thecocktaildb.com/api/json/v1'
    private cocktailDBKey = '/1';



  getDrink(drink: String): Observable<String> {
    return this.http.get<String>(this.cocktailDBUrl + this.cocktailDBKey + '/search.php?s=' + drink);
  }
}
