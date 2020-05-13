import { Component } from '@angular/core';
import { Config, PosterService } from './services/poster.service';
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

  constructor(private movieService: PosterService) {
    this.isTemplate = true;
  }

  search(movie) {
    this.movieService.getConfig(movie)
    .subscribe((result: Movie) => {
      this.movie1 = result;
    });

      console.log('here');
      this.poster1 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
  }

}

