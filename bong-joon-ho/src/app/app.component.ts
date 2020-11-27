import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bong-joon-ho';

  constructor(
  ) {}

  logoLink() {
    window.open("https://www.reelfolio.com/home", "_blank");
  }

}

