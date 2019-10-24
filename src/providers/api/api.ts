import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {}
    getArtikel(){
      return this.http.get('https://swapi.co/api/films');
    
  }
    getKomentar(){
      return this.http.get('https://swapi.co/api/people');
    }

}
