import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBhzPcfmlEx7iLa_E0_X1oYDjRIWiTSnvx784-Mb9RSWrYFu8b58qnJ2jSfkiYxPLHKnM4n97UyB8gkjdc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data => {
      console.log(data);
    });
  }
}
