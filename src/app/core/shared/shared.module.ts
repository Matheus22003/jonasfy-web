import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JonasfySliderComponent} from './component/jonasfy-slider/jonasfy-slider.component';
import {FormsModule} from "@angular/forms";
import { JonasfyPlaylistPlayComponent } from './component/jonasfy-playlist-play/jonasfy-playlist-play.component';
import { JonasfyMusicCardComponent } from './component/jonasfy-music-card/jonasfy-music-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import {IsVisibleDirective} from "./directives/is-visible-directive.directive";


@NgModule({
  declarations: [
    JonasfySliderComponent,
    JonasfyPlaylistPlayComponent,
    JonasfyMusicCardComponent,
    TruncatePipe,
    IsVisibleDirective,
  ],
  exports: [
    JonasfySliderComponent,
    JonasfyPlaylistPlayComponent,
    JonasfyMusicCardComponent,
    IsVisibleDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
