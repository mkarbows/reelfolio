import { Component } from '@angular/core';
import { Config, PosterService } from './services/poster.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bong-joon-ho';
  config: Config;
  movie1: any;
  poster1: string;

  results$: Observable<any>;

  constructor(private movieService: PosterService) {
  }

  search(movie) {
    this.movieService.getConfig(movie)
    .subscribe((result: any) => {
      this.movie1 = result;
    });

      console.log('here');
      this.poster1 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
  }

}

