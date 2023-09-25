import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private apiUrl: string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(`${this.apiUrl}/people`);
  }

  getFilm(filmUrl: string) {
    return this.http.get(filmUrl);
  }

}
