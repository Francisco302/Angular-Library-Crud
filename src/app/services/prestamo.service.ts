import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestamo } from '../models/Prestamo';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  MODULE_ENDPOINT = 'prestamo'
  constructor(private http: HttpClient) { }

  getPrestamos(){
    return this.http.get(`${environment.API_uri}/${this.MODULE_ENDPOINT}`);
  }
  getPrestamo(id: string){
    return this.http.get(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`);
  }
  getDetallesDePrestamo(id: string){
    return this.http.get(`${environment.API_uri}/detallesDePrestamo/${id}`);
  }
  savePrestamo(prestamo: Prestamo){
    console.log(prestamo);
    return this.http.post(`${environment.API_uri}/${this.MODULE_ENDPOINT}`, prestamo);
  }

  delete(id: string){
    return this.http.delete(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`);
  }

  updatePrestamo(id: string, prestamo: Prestamo): Observable<any>{
    return this.http.put(`${environment.API_uri}/${this.MODULE_ENDPOINT}/${id}`, prestamo);
  }
  getPrestamoesByCoincidence(coincidence: string){
    if(coincidence.length == 0)
      return this.getPrestamos();
    return this.http.get(`${environment.API_uri}/prestamosByCoincidence/${coincidence}`);
  }
}
