import { Component, OnInit } from '@angular/core';
import { PosterService, Config } from 'src/app/services/poster.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  isTemplate: boolean;
  config: Config;
  movie1: any;
  poster1: string;

  constructor(private posterService: PosterService) {
    this.isTemplate = true;
  }

  ngOnInit(): void {
  }

  

}
