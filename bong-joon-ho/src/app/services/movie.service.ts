import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  moviesURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';
  apiKey = '18721f99e5676a2aaaf5e9e291a726c7';

  getConfig(query) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey + "&language=en-US&query=" +  query + "&page=1&include_adult=false");
  }

}
