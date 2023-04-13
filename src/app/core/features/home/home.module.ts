import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from "../../shared/shared.module";
import { PlaylistRecenteCardComponent } from './playlist-recente-card/playlist-recente-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    PlaylistRecenteCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule {
}
