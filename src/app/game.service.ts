import { Injectable } from '@angular/core';
import { Mine } from './mine.model';

@Injectable()
export class GameService {
  mines: any[] = [];

  constructor() { }

  createBoard(dimensions) {
    for (let x = 0; x < dimensions; x++) {
      this.mines[x] = [];
      for (let y = 0; y < dimensions; y++) {
        let newMine: Mine = new Mine(false, '0');
        this.mines[x][y] = newMine;
      }
    }
  }

}
