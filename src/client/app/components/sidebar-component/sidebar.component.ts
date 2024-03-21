import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import sidebarThemeToggle from 'utils/sidebarThemeToggle';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {}
  
  ngAfterViewInit() {
    sidebarThemeToggle()
  }
}
