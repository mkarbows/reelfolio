import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-container',
  templateUrl: './poster-container.component.html',
  styleUrls: ['./poster-container.component.css']
})
export class PosterContainerComponent implements OnInit {
  isTemplate: boolean;

  constructor() {
    this.isTemplate = true;
  }

  ngOnInit(): void {
  }

}
