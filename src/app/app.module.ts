import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from "./core/main/main.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./core/shared/shared.module";
import {HomeModule} from "./core/features/home/home.module";
import {MatDrawerContainer} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BsDropdownModule,
    SharedModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft, faChevronRight)
  }
}
