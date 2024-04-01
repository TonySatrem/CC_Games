import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import header from 'news/src/utils/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    header()
  }
}
