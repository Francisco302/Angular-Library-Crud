import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../models/Autor';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }
  getAutores(){
    return this.http.get(`${environment.API_uri}/autores`);
  }
  getAutor(id: string){
    return this.http.get(`${environment.API_uri}/autores/${id}`);
  }
  saveAutor(autor: Autor){
    return this.http.post(`${environment.API_uri}/autores`, autor);
  }

  delete(id: string){
    return this.http.delete(`${environment.API_uri}/autores/${id}`);
  }

  updateAutor(id: string, autor: Autor): Observable<any>{
    return this.http.put(`${environment.API_uri}/autores/${id}`, autor);
  }
  getAutoresByCoincidence(coincidence: string){
    if(coincidence.length == 0)
      return this.getAutores();
    return this.http.get(`${environment.API_uri}/autoresByCoincidence/${coincidence}`);
  }
}
