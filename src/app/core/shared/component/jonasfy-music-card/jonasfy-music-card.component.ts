import {Component, Input, OnInit} from '@angular/core';
import {SlicePipe} from "@angular/common";

@Component({
  selector: 'jonasfy-music-card',
  templateUrl: './jonasfy-music-card.component.html',
  styleUrls: ['./jonasfy-music-card.component.scss']
})
export class JonasfyMusicCardComponent implements OnInit {
  @Input()
  public artistas = ["Supercombo", "Kid Smoko", "Gabriel Elias", "Supercombo", "Gabriel Elias"]

  public artistaHelper!: string

  public ngOnInit(): void {
    let slicePipe = new SlicePipe();
    this.artistaHelper = this.artistas.toString();
    this.artistaHelper = slicePipe.transform(this.artistaHelper, 0, 39 - this.artistas.length);
    if (this.artistaHelper[this.artistaHelper.length - 1] === ',') {
      this.artistaHelper = this.artistaHelper.slice(0, -1);
    }
    this.artistas = this.artistaHelper.split(',')
    this.artistas.push('...');
  }

}
