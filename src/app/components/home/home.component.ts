import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  cargando: boolean;

  error: boolean;
  descError: string;

  constructor(private spotify: SpotifyService) {

    this.cargando = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.cargando = false;
    }, ( errorServicio ) => {
      this.descError = errorServicio.error.error.message;
      this.cargando = false;
      this.error = true;
    });
  }
}
