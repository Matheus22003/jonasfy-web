import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JonasfySliderComponent} from './component/jonasfy-slider/jonasfy-slider.component';
import {FormsModule} from "@angular/forms";
import { JonasfyPlaylistPlayComponent } from './component/jonasfy-playlist-play/jonasfy-playlist-play.component';


@NgModule({
  declarations: [
    JonasfySliderComponent,
    JonasfyPlaylistPlayComponent,
  ],
  exports: [
    JonasfySliderComponent,
    JonasfyPlaylistPlayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
