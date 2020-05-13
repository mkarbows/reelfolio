import { Component, OnInit } from '@angular/core';
import { PosterService, Config } from 'src/app/services/poster.service';
import { Movie } from 'src/assets/movie';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  isTemplate: boolean;
  config: Config;
  movie1: Movie;
  poster1: string;

  constructor(private posterService: PosterService) {
    this.isTemplate = true;
  }

  ngOnInit(): void {
  }

  

}
