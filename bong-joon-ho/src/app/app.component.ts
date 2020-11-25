import { Component } from '@angular/core';
import { Config, PosterService } from './services/poster.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from './store';
import { PosterActions } from './store';


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

  constructor(
    private movieService: PosterService,
    private store: Store<fromStore.State>
  ) {
  }

  logoLink() {
    window.open("https://www.reelfolio.com/home", "_blank");
  }

  searchMovieAlert(movie){
    console.log(movie);
    this.store.dispatch(PosterActions.SearchMovie({ movie }));
    // onSubmit(username: string, password: string) {
      // store.dispatch(login({ username: username, password: password }));
    // }
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

