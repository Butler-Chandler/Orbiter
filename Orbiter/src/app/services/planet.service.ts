import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  uri = 'http://localhost:8080/planet';

  constructor(private http: HttpClient) { }

  public getPlanet(){
    return this.http.get(`${this.uri}`);
  }
}
