import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: string[];
  @Output() searchMovie: EventEmitter<any> = new EventEmitter<any>();

  myControl = new FormControl();
  options: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search(input) {
    this.searchMovie.emit(input);
  }

  select(input) {
    console.log(input);
  }

}
