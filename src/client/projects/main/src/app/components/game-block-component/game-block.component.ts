import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input } from '@angular/core';
import GameBlock from 'main/src/utils/gameBlock';
import { IGameBlock } from '../../models/IGameBlock';

@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent {
  @Input() game: IGameBlock

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    GameBlock(this.game)
  }
}
