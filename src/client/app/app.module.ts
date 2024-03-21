import { ElementRef, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-root-component/app.component';
import { SidebarComponent } from './components/sidebar-component/sidebar.component';
import { GameBlockComponent } from './components/game-block-component/game-block.component';
import { MainComponent } from './components/main-component/main.component';
import { GamesComponent } from './components/games-component/games.component';
import { FoodbarComponent } from './components/foodbar-component/foodbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GameBlockComponent,
    MainComponent,
    GamesComponent,
    FoodbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
