import { Component } from '@angular/core';
import { Config, MovieService } from './services/movie.service';
import { Movie } from 'src/assets/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bong-joon-ho';
  isTemplate: boolean;
  config: Config;
  movie1: Movie;
  poster1: string;
  poster2: string;
  poster3: string;
  poster4: string;
  poster1Selected: boolean;
  poster2Selected: boolean;
  poster3Selected: boolean;
  poster4Selected: boolean;

  constructor(private movieService: MovieService) {
    this.isTemplate = true;
    this.poster1Selected = false;
  }

  search(movie) {
    this.movieService.getConfig(movie)
    .subscribe((result: Movie) => {
      this.movie1 = result;
    });

    if (this.poster1Selected === true && this.movie1) {
      console.log('here');
      this.poster1 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
      this.poster1Selected = false;
    } else if (this.poster2Selected === true) {
      this.poster2 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
    } else if (this.poster3Selected === true) {
      this.poster3 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
    } else if (this.poster4Selected === true) {
      this.poster4 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
    }
  }

  setDVD(dvd) {
    if (dvd === 1) {
      this.poster1Selected = true;
    } else if (dvd === 2) {
      this.poster2Selected = true;
    } else if (dvd === 3) {
      this.poster3Selected = true;
    } else if (dvd === 4) {
      this.poster4Selected = true;
    }
  }

}

