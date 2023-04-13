import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav/sidenav.component';
import {FooterComponent} from './footer/footer.component';
import {PlaylistSidenavComponent} from './sidenav/playlist-sidenav/playlist-sidenav.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MusicInfoComponent} from './footer/music-info/music-info.component';
import {MusicMediaControlComponent} from './footer/music-media-control/music-media-control.component';
import {SharedModule} from "../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";


@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent,
    PlaylistSidenavComponent,
    NavbarComponent,
    MusicInfoComponent,
    MusicMediaControlComponent
  ],
  exports: [
    FooterComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    BsDropdownModule,
  ]
})
export class MainModule {
}
