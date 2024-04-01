import { Component, Input } from '@angular/core';
import { IGameBlock } from '../../models/IGameBlock';

@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent {
  @Input() game: IGameBlock
}
