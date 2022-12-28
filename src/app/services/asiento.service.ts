import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsientoModel } from '../models/AsientoModel';
import { DetalleAsientoModel } from '../models/DetalleAsientoModel';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  API_uri = '';
  constructor(private http: HttpClient) { }

/*
http://apicsharp.somee.com/api/DetalleAsiento/DetalleById?id=44
http://apicsharp.somee.com/api/Asiento

*/

  saveAsiento(asiento: AsientoModel){
    return this.http.post(`http://apicsharp.somee.com/api/Asiento/guardarAsiento`, JSON.stringify(asiento));
  }
  saveDetalleAsiento(detalle: DetalleAsientoModel){
    return this.http.post(`http://apicsharp.somee.com/api/DetalleAsiento/guardarDetalle`, JSON.stringify(detalle));
  }



  //Asiento/guardarAsiento
}
