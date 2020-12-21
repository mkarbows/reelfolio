import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { SearchActions } from '../../store';
import { searchResultsOptions } from '../../store/selectors';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  movie1: any;
  poster1: string;

  searchResults$: Observable<any>;
  
  constructor(
    private store: Store<fromStore.State>,
  ) {
    this.searchResults$ = this.store.pipe(
      select(searchResultsOptions)
    );
  }

  ngOnInit(): void {}

  searchBoxClickedAlert() {
    this.store.dispatch(SearchActions.SearchBoxClicked());
  }

  searchFilmAlert(filmName: string){
    this.store.dispatch(SearchActions.SearchFilm({ filmName: filmName }));
  }

}
