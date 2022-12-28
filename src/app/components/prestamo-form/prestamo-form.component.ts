import { Component, Input, ViewChild } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from 'src/app/models/Prestamo';
import { PrestamoListComponent } from '../prestamo-list/prestamo-list.component';
import { Router } from '@angular/router';
import { DetallePrestamoFormComponent } from '../detalle-prestamo-form/detalle-prestamo-form.component';
import { formatDate } from '@angular/common';
import { AsientoService } from 'src/app/services/asiento.service';
import { AsientoModel } from 'src/app/models/AsientoModel';
import { DetalleAsientoModel } from 'src/app/models/DetalleAsientoModel';

@Component({
  selector: 'app-prestamo-form',
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.scss']
})
export class PrestamoFormComponent {
  @ViewChild(PrestamoListComponent) prestamoListComponent: PrestamoListComponent | undefined;
  @ViewChild(DetallePrestamoFormComponent) detallePrestamoFormComponent: DetallePrestamoFormComponent | undefined;
  
  @Input() prestamo: Prestamo = {
    idPrestamo: 0,
    numeroPrestamo: 0,
    fechaPrestamo: '',
    descripcionPrestamo: '',
    detallesPrestamo: []
  }

  prestamos: any = []

  constructor(private prestamoService: PrestamoService,
    private router: Router,
    private asientoService: AsientoService) {
    this.prestamoService.getPrestamos().subscribe(
      res => {
        this.prestamos = res;
      },
      err => console.error(err)
    )
  }
  saveNewPrestamo() {
    this.prestamoService.savePrestamo(this.prestamo).subscribe(
      res => {
        const asiento = new AsientoModel(0, this.prestamo.fechaPrestamo, this.prestamo.descripcionPrestamo);
        let idAsiento =  Number(this.asientoService.saveAsiento(asiento).subscribe(
          res => {
            console.log(res);
          },
          err => {console.log(err);}
        ));
        this.asientoService.saveDetalleAsiento(new DetalleAsientoModel(0,11,this.detallePrestamoFormComponent!.total.toString(),"0",idAsiento));
        this.asientoService.saveDetalleAsiento(new DetalleAsientoModel(0,13,"0",this.detallePrestamoFormComponent!.total.toString(),idAsiento));

        this.prestamo.idPrestamo = 0;
        this.prestamo.numeroPrestamo = 0;
        this.prestamo.fechaPrestamo = '';
        this.prestamo.descripcionPrestamo = '';
        // console.log(this.prestamoListComponent);
        this.prestamoListComponent?.onSubmit();

      },
      err => {
        console.error(err);
       
      }
    )
  }

  receiveChildData(data: Prestamo) {
    let x = new Prestamo(data.idPrestamo, data.numeroPrestamo, data.fechaPrestamo, data.descripcionPrestamo);
    this.prestamo = x;
    this.prestamoService.getDetallesDePrestamo(this.prestamo.idPrestamo!.toString()).subscribe(
      res => {
        this.detallePrestamoFormComponent!.detallesPrestamo = res;
        this.detallePrestamoFormComponent!.calculateTotal();
      },
      err => console.error(err)
    )
  }

  receiveChildDataDetalles(data: []) {
    this.prestamo.detallesPrestamo = data;
    this.saveNewPrestamo();
    
    this.prestamoListComponent?.onSubmit();

  }

  updatePrestamo() {
    this.prestamo.detallesPrestamo = this.detallePrestamoFormComponent?.detallesPrestamo;
    console.log('update');
    this.prestamoService.updatePrestamo(this.prestamo.idPrestamo!.toString(), this.prestamo).subscribe(
      res => {
        this.prestamo.idPrestamo = 0;
        this.prestamo.numeroPrestamo = 0;
        this.prestamo.fechaPrestamo = '';
        this.prestamo.descripcionPrestamo = '';
        this.prestamoListComponent?.onSubmit();
      },
      err => console.error(err)
    )
  }

}
