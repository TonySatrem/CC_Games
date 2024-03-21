import { Component } from '@angular/core';
import { gameBlocks } from 'app/data/gameBlocks'
import { IGameBlock } from 'app/models/IGameBlock';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent {
  games: IGameBlock[] = gameBlocks
}
