import {Component, Input} from '@angular/core';
import ColorThief from "colorthief/dist/color-thief";
import chroma from "chroma-js/chroma.js";

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
    // const colors = colorThief.getPalette(teste)[1];
    const colors = colorThief.getColor(teste);
    const r = Number(colors[0]);
    const g = Number(colors[1]);
    const b = Number(colors[2]);
    let rgb = `rgb(${r / 1}, ${g / 1}, ${b / 1})`;
    rgb = chroma(rgb).darken().hex();
    document.documentElement.style.setProperty('--color-playslist-home-page', `${rgb} `);
  }

  componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r: number, g: number, b: number) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}
