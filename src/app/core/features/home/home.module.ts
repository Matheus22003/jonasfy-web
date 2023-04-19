import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from "../../shared/shared.module";
import { PlaylistRecenteCardComponent } from './playlist-recente-card/playlist-recente-card.component';
import { UltimasPlayslistsTocadasComponent } from './ultimas-playslists-tocadas/ultimas-playslists-tocadas.component';


@NgModule({
  declarations: [
    HomeComponent,
    PlaylistRecenteCardComponent,
    UltimasPlayslistsTocadasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule {
}
