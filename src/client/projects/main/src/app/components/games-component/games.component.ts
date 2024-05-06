import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import slider from 'main/src/utils/slider';
import { gameBlocks } from '../../data/gameBlocks';
import { IGameBlock } from '../../models/IGameBlock';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  games: IGameBlock[] = gameBlocks

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngAfterViewInit() {
    slider()
  }
}
