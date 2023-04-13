import {Component, OnInit} from '@angular/core';
import {IconUtils} from "../../../utils/IconUtils";

@Component({
  selector: 'app-music-media-control',
  templateUrl: './music-media-control.component.html',
  styleUrls: ['./music-media-control.component.scss']
})
export class MusicMediaControlComponent {

  public min = 0;
  public max = 1000;
  public valueMusicSlider = 10;

  public buttonPlayCick(): void {
    IconUtils.changeIconOnClick('playButton', 'bi-play-circle-fill', `bi-pause-circle-fill`);
  }

}
