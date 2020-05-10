import { Component } from '@angular/core';
import { Config, MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bong-joon-ho';
  isTemplate: boolean;
  config: Config;
  posterPath: any;

  constructor(private movieService: MovieService) {
    this.isTemplate = true;
    
  }

  search(movie) {
    this.movieService.getConfig(movie)
    .subscribe(result => (this.posterPath = result));
  }

}

