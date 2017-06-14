import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../mine.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() mine: Mine;

  constructor() { }

  ngOnInit() {
  }

}
