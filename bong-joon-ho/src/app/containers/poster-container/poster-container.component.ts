import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { PosterActions } from 'src/app/store';

@Component({
  selector: 'app-poster-container',
  templateUrl: './poster-container.component.html',
  styleUrls: ['./poster-container.component.css']
})
export class PosterContainerComponent implements OnInit {
  isTemplate: boolean;

  constructor(private store: Store<fromStore.State>) {
    this.isTemplate = true;
  }

  ngOnInit(): void {
  }

  posterClickedAlert(posterId: number) {
    this.store.dispatch(PosterActions.PosterClicked({ posterId: posterId }));
  }

}
