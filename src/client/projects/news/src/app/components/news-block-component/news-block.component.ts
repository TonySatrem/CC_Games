import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import newsBlock from 'news/src/utils/newsBlock';
import { INews } from '../../models/INews'

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent {
  @Input() news: INews;

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    newsBlock(this.news)
  }
}
