import {Component, OnInit} from '@angular/core';

const LINK_POUSE_BTN = "assets/images/btn/pouse-btn.svg";
const LINK_PLAY_BTN = "assets/images/btn/play-btn.svg";

@Component({
  selector: 'jonasfy-playlist-play',
  templateUrl: './jonasfy-playlist-play.component.html',
  styleUrls: ['./jonasfy-playlist-play.component.scss']
})
export class JonasfyPlaylistPlayComponent implements OnInit {
  public btnSelected!: string;
  public isPouse = false;

  public ngOnInit(): void {
    this.btnSelected = LINK_PLAY_BTN;
  }

  public onClick() {
    if (this.btnSelected === LINK_PLAY_BTN) {
      this.btnSelected = LINK_POUSE_BTN;
      this.isPouse = true;
      return;
    }
    this.isPouse = false;
    this.btnSelected = LINK_PLAY_BTN;
  }

}
