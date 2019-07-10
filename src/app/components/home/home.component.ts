import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  /*paises: any[] = [];

  constructor(private http: HttpClient ) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (respuesta: any) => {
      this.paises = respuesta;
      console.log(respuesta);
    });
  }*/

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases();
  }

}
