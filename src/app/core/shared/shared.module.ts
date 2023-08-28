import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JonasfySliderComponent} from './component/jonasfy-slider/jonasfy-slider.component';
import {FormsModule} from "@angular/forms";
import { JonasfyPlaylistPlayComponent } from './component/jonasfy-playlist-play/jonasfy-playlist-play.component';
import { JonasfyMusicCardComponent } from './component/jonasfy-music-card/jonasfy-music-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    JonasfySliderComponent,
    JonasfyPlaylistPlayComponent,
    JonasfyMusicCardComponent,
    TruncatePipe,
  ],
    exports: [
        JonasfySliderComponent,
        JonasfyPlaylistPlayComponent,
        JonasfyMusicCardComponent,
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
