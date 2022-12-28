import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetallePrestamo } from 'src/app/models/DetallePrestamo';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-detalle-prestamo-form',
  templateUrl: './detalle-prestamo-form.component.html',
  styleUrls: ['./detalle-prestamo-form.component.scss']
})
export class DetallePrestamoFormComponent {
  @Input() detallesPrestamo: any = []
  @Input() total = 0;
  libros: any = []
  @Output() outputFromChild: EventEmitter<[]> = new EventEmitter();

  @Input() detallePrestamo: DetallePrestamo = {
    idDetalleP: 0,
    idPrestamo: 0,
    idLibro: 0,
    cantidadDetalleP: 0,
    fechaEntregaDetalleP: new Date(),
  }

  constructor(private prestamoService: LibroService) {
    this.prestamoService.getLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => console.error(err)
    )
  }

  agregarDetalle() {
    let tmp = new DetallePrestamo(
      this.detallePrestamo.idDetalleP,
      this.detallePrestamo.idPrestamo,
      this.detallePrestamo.idLibro,
      this.detallePrestamo.cantidadDetalleP,
      this.detallePrestamo.fechaEntregaDetalleP
    )
    let flag = 'N'
    // console.log('DetalleAdd')
    // console.log(tmp)
    // console.log(this.detallesPrestamo)
    this.detallesPrestamo.forEach((value: DetallePrestamo, index: number) => {
      if (value.idLibro == tmp.idLibro) {
        value.cantidadDetalleP = tmp.cantidadDetalleP;
        value.fechaEntregaDetalleP = tmp.fechaEntregaDetalleP;
        flag = 'Y';

      }
    });
    if (flag == 'N') {
      this.detallesPrestamo.push(tmp);
    }
    this.calculateTotal();
  }
  setDetalle(detalle: DetallePrestamo) {
    this.detallePrestamo.idLibro = detalle.idLibro;
    this.detallePrestamo.cantidadDetalleP = detalle.cantidadDetalleP;
    this.detallePrestamo.fechaEntregaDetalleP = detalle.fechaEntregaDetalleP;
  }
  deleteDetalle(idLibro: number) {

    this.detallesPrestamo.forEach((value: DetallePrestamo, index: number) => {
      if (value.idLibro === idLibro) {
        this.detallesPrestamo.splice(index, 1);
      }
    });
    this.calculateTotal();
  }


  sendDataToParent() {
    console.log( 'Send datail to parent');
    this.outputFromChild.emit(this.detallesPrestamo);
    this.detallesPrestamo = [];
    this.calculateTotal();
  }
  calculateTotal(){
    let tmpTotal = 0;
    this.detallesPrestamo.forEach((value: DetallePrestamo, index: number) => {

      tmpTotal += Number(value.cantidadDetalleP!) * this.getCostoLibro(value.idLibro!);

    });
    this.total = tmpTotal;
  }
  getTituloLibro(idLibro : number): string{
    for (let i = 0; i < this.libros.length; i++){
      if(this.libros[i]['idLibro'] == idLibro){
        return this.libros[i]['tituloLibro'];
      }
    }
    return '';
  }

  getTotalIndividual(cantidadDetalleP: string , idLibro : number): number{
    for (let i = 0; i < this.libros.length; i++){
      if(this.libros[i]['idLibro'] == idLibro){
        return Number(this.libros[i]['valorPrestamoLibro']) * Number(cantidadDetalleP);
      }
    }
    return 0;
  }

  getCostoLibro( idLibro : number): number{
    for (let i = 0; i < this.libros.length; i++){
      if(this.libros[i]['idLibro'] == idLibro){
        return Number(this.libros[i]['valorPrestamoLibro']);
      }
    }
    return 0;
  }
}
