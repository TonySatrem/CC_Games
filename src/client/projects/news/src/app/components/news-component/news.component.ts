import { Component, OnInit } from '@angular/core';
import Colors from '../../data/Colors';
import { INews } from '../../models/INews';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  constructor(private newsService: NewsService) { }

  newsArr: INews[]

  ngOnInit(): void {
    this.getNews()
  }

  getNews(): void {
    this.newsService.getDailyNews()
      .subscribe({
        next: result => this.newsArr = result,
        complete: () => {
          this.setComponentColors()
          this.setIds()
        },
        error: error => console.error(error)
      })
  }

  setIds(): void {
    this.newsArr.forEach((n, i) => n.id = i)
  }

  setComponentColors(): void {
    const g = this.colorsGenerator()
    this.newsArr.forEach(n => n.colors = g.next().value)
  }

  *colorsGenerator() {
    const cl = Colors.length - 1    
    for (let i = 0; ;i++) {
      if (i > cl) i = 0  
      yield Colors[i]
    }
  }
}