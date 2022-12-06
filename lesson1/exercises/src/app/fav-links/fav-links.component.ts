import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://www.reddit.com/r/titanfall2/', 'https://en.wikipedia.org/wiki/Train'];

  constructor() { }

  ngOnInit() {
  }

}
