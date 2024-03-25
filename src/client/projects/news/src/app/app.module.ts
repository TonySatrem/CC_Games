import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppRootComponent } from './components/app-root/app.component';
import { HeaderComponent } from './components/header-component/header.component';
import { NewsComponent } from './components/news-component/news.component';
import { NewsBlockComponent } from './components/news-block-component/news-block.component';
import { FoodbarComponent } from './components/foodbar-component/foodbar.component';

@NgModule({
  declarations: [
    AppRootComponent,
    HeaderComponent,
    NewsComponent,
    NewsBlockComponent,
    FoodbarComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
