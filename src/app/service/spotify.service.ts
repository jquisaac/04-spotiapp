import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAqUoZrAIKxaiCFfWHl5XHxS0XVodGZpUvpBe4MK-bKRQ1-Z4-KfVcevYVNGl8mvoiBbmmyLzSS1RfGq8s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAqUoZrAIKxaiCFfWHl5XHxS0XVodGZpUvpBe4MK-bKRQ1-Z4-KfVcevYVNGl8mvoiBbmmyLzSS1RfGq8s'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers });
  }
}
