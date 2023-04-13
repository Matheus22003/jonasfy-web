import {Component, OnInit} from '@angular/core';
import ColorThief from 'colorthief/dist/color-thief';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public boasVindasMsg!: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.setMsgBoasVIndas();
    document.documentElement.style.setProperty('--color-playslist-home-page', `#0E1726`)
  }

  private setMsgBoasVIndas() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      this.boasVindasMsg = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      this.boasVindasMsg = "Boa tarde";
    } else {
      this.boasVindasMsg = "Boa noite";
    }
  }
}
