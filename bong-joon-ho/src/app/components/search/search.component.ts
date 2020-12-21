import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() results: any;
  @Output() searchBoxClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchFilm: EventEmitter<string> = new EventEmitter<string>();

  myControl = new FormControl();
  options: string[] = [
    'test1',
    'hi'
  ];

  constructor() { }

  ngOnInit(): void { }

  searchBoxClick() {
    this.searchBoxClicked.emit();
  }

  search(input: string) {
    this.searchFilm.emit(input);
    console.log(this.results);
  }

}
