import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/app/models/Libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.scss']
})
export class LibroListComponent {
  libros: any = []
  txtBusqueda = ''
  @Output() outputFromChild : EventEmitter<Libro> = new EventEmitter();

  @Input() autorSelected: Libro = {
    idLibro : 0,
    ISBNLibro : '',
    idAutor : 0,
    tituloLibro : '',
    valorPrestamoLibro : ''
  };

  constructor(private autorService: LibroService){
    this.autorService.getLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => console.error(err)
    )
  }

  onSubmit() {
    this.autorService.getLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => console.error(err)
    )
  }
  deleteLibro(id: string){
    this.autorService.delete(id).subscribe(
      res => {
        this.libros = res;
        this.onSubmit();
      },
      err => console.error(err)
    );
  }

  selectLibro(autorTmp:Libro){
   // console.log(autorTmp);
    this.autorSelected = autorTmp;
  }
  sendDataToParent(a: Libro) {
    this.outputFromChild.emit(a);
  }
  filtroLibros(){
    this.autorService.getLibroesByCoincidence(this.txtBusqueda).subscribe(
      res => {
        this.libros = res;
      },
      err => console.error(err)
    )
  }
  
}
