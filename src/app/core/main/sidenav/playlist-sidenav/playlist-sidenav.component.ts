import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-sidenav',
  templateUrl: './playlist-sidenav.component.html',
  styleUrls: ['./playlist-sidenav.component.scss']
})
export class PlaylistSidenavComponent implements OnInit {

  public ngOnInit(): void {
    const sidenavMenu = document.getElementById('sidenav-menu');
    const playslistFixa = document.getElementById('playslist-fixa');
    document.documentElement.style.setProperty('--playlist-fixed-size', playslistFixa?.clientHeight + 'px');
    document.documentElement.style.setProperty('--sidenav-menu-size', sidenavMenu?.clientHeight + 'px');
  }

  public playlists = [
    {nome: 'Playlist 1'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 2'},
    {nome: 'Playlist 3'}];

}
