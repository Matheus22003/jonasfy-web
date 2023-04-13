import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public changeBg = false;

  public ngOnInit(): void {
    var div = document.getElementById('main-music') as HTMLElement;
    div.addEventListener('scroll', () => {
      var x = div.scrollTop;
      if (x > 40) {
        this.changeBg = true;
        return;
      }
      this.changeBg = false;
    });
  }

}
