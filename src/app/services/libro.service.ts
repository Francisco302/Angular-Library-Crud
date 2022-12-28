import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/Libro';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  
  MODULE_ENDPOINT = 'libro'
  constructor(private http: HttpClient) { }

  getLibros(){
    return this.http.get(`${environment.API_uri}/${this.MODULE_ENDPOINT}`);
  }
  getLibro(id: string){
    return this.http.get(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`);
  }
  saveLibro(libro: Libro){
    return this.http.post(`${environment.API_uri}/${this.MODULE_ENDPOINT}`, libro);
  }

  delete(id: string){
    return this.http.delete(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`);
  }

  updateLibro(id: string, libro: Libro): Observable<any>{
    return this.http.put(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`, libro);
  }
  getLibroesByCoincidence(coincidence: string){
    if(coincidence.length == 0)
      return this.getLibros();
    return this.http.get(`${environment.API_uri}/librosByCoincidence/${coincidence}`);
  }
}
