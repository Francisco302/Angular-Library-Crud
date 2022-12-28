import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prestamo } from 'src/app/models/Prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListComponent {
  prestamos: any = []
  txtBusqueda = ''
  @Output() outputFromChild : EventEmitter<Prestamo> = new EventEmitter();

  @Input() prestamoSelected: Prestamo = {
    idPrestamo: 0,
    numeroPrestamo: 0,
    fechaPrestamo: '',
    descripcionPrestamo: '',
  };

  constructor(private prestamoService: PrestamoService){
    this.prestamoService.getPrestamos().subscribe(
      res => {
        this.prestamos = res;
      },
      err => console.error(err)
    )
  }

  onSubmit() {
    this.prestamoService.getPrestamos().subscribe(
      res => {
        this.prestamos = res;
      },
      err => console.error(err)
    )
  }
  deletePrestamo(id: string){
    this.prestamoService.delete(id).subscribe(
      res => {
        this.prestamos = res;
        this.onSubmit();
      },
      err => console.error(err)
    );
  }

  selectPrestamo(prestamoTmp:Prestamo){
   // console.log(prestamoTmp);
    this.prestamoSelected = prestamoTmp;
  }
  sendDataToParent(a: Prestamo) {
    this.outputFromChild.emit(a);
  }
  filtroPrestamos(){
    this.prestamoService.getPrestamoesByCoincidence(this.txtBusqueda).subscribe(
      res => {
        this.prestamos = res;
      },
      err => console.error(err)
    )
  }
}
