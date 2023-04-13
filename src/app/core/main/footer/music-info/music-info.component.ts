import {Component} from '@angular/core';
import {IconUtils} from "../../../utils/IconUtils";

@Component({
  selector: 'app-music-info',
  templateUrl: './music-info.component.html',
  styleUrls: ['./music-info.component.scss']
})
export class MusicInfoComponent {

  public coracaoClick(): void {
    IconUtils.changeIconOnClick('coracao', 'bi-heart', 'bi-heart-fill');
  }
}
