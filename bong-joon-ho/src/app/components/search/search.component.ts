import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: string[];
  @Output() searchBoxClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchMovie: EventEmitter<string> = new EventEmitter<string>();

  myControl = new FormControl();
  options: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchBoxClick() {
    this.searchBoxClicked.emit();
  }

  search(input: string) {
    this.searchMovie.emit(input);
  }

}
