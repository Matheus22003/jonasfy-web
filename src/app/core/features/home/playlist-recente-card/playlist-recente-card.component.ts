import {Component, Input} from '@angular/core';
import ColorThief from "colorthief/dist/color-thief";

@Component({
  selector: 'playlist-recente-card',
  templateUrl: './playlist-recente-card.component.html',
  styleUrls: ['./playlist-recente-card.component.scss']
})
export class PlaylistRecenteCardComponent {

  @Input()
  public playlistImg = "assets/images/musicasCurtidas.png";

  public colorPlaylistPicker(teste: any): void {
    const colorThief = new ColorThief();
    const img = document.getElementById("playlist1");
    const colors = colorThief.getPalette(teste)[3];
    const r = Number(colors[0]);
    const g = Number(colors[1]);
    const b = Number(colors[2]);
    let rgb = `rgb(${r / 3.5}, ${g / 4.5}, ${b / 2.5})`;
    document.documentElement.style.setProperty('--color-playslist-home-page', `${rgb} `);
  }
}
