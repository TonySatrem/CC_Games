import { Component } from '@angular/core';
import { gameBlocks } from '../../data/gameBlocks';
import { IGameBlock } from '../../models/IGameBlock';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  games: IGameBlock[] = gameBlocks
}
