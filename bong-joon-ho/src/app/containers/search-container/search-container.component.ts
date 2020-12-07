import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Config, PosterService } from '../../services/poster.service';
import { SearchActions } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  config: Config;
  movie1: any;
  poster1: string;

  results$: Observable<any>;
  
  constructor(
    private store: Store<fromStore.State>,
    private posterService: PosterService
  ) {}

  ngOnInit(): void {}

  searchBoxClickedAlert() {
    this.store.dispatch(SearchActions.SearchBoxClicked());
  }

  searchFilmAlert(filmName: string){
    this.store.dispatch(SearchActions.SearchFilm({ filmName: filmName }));
  }

  search(filmName) {
    this.posterService.getConfig(filmName)
    .subscribe((result: any) => {
      this.movie1 = result;
    });

      console.log('here');
      this.poster1 = "https://image.tmdb.org/t/p/w500" + this.movie1.results[0].poster_path;
  }

}
