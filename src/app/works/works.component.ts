import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent implements OnInit {
  angularTiles: Tile[];
  reactTiles: Tile[];
  otherTiles: Tile[];

  constructor() {
    this.angularTiles = [
      {text: 'Spotify: Create Playlist from Song List', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Generator: Haiku?', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'What did you think?: Movie rating system', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Classroom', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    this.reactTiles = [
      {text: 'Calculator', cols: 2, rows: 1, color: 'lightblue'},
      {text: 'Interact with Database', cols: 1, rows: 1, color: 'lightgreen'},
      {text: '?', cols: 1, rows: 2, color: 'lightpink'},
      {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Five', cols: 2, rows: 1, color: 'lightsalmon'},
    ];
    this.otherTiles = [
      {text: 'Peridot Chatbot', cols: 2, rows: 1, color: 'lightblue'},
      {text: '', cols: 1, rows: 1, color: 'lightgreen'}
    ];
   }

  ngOnInit() {
  }

}
