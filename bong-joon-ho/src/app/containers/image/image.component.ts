import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  isTemplate: boolean;
  
  constructor(private store: Store<any>) {
    this.isTemplate = true;
  }

  ngOnInit(): void {
  }

}
