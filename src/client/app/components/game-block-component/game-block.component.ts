import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input } from '@angular/core';
import { IGameBlock } from 'app/models/IGameBlock';
import slider from 'utils/slider';


@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent implements AfterViewInit {
  @Input() game: IGameBlock

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    slider()
  }
}
