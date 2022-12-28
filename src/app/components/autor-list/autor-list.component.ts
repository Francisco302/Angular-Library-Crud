import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Autor } from 'src/app/models/Autor';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.scss']
})
export class AutorListComponent {
  autores: any = []
  txtBusqueda = ''
  @Output() outputFromChild : EventEmitter<Autor> = new EventEmitter();

  @Input() autorSelected: Autor = {
    idAutor: 0,
    codigoAutor: '',
    nombreAutor: 'hhh',
    apellidoAutor: 'kjjj',
  };

  constructor(private autorService: AutoresService){
    this.autorService.getAutores().subscribe(
      res => {
        this.autores = res;
      },
      err => console.error(err)
    )
  }

  onSubmit() {
    this.autorService.getAutores().subscribe(
      res => {
        this.autores = res;
      },
      err => console.error(err)
    )
  }
  deleteAutor(id: string){
    this.autorService.delete(id).subscribe(
      res => {
        this.autores = res;
        this.onSubmit();
      },
      err => console.error(err)
    );
  }

  selectAutor(autorTmp:Autor){
   // console.log(autorTmp);
    this.autorSelected = autorTmp;
  }
  sendDataToParent(a: Autor) {
    this.outputFromChild.emit(a);
  }
  filtroAutores(){
    this.autorService.getAutoresByCoincidence(this.txtBusqueda).subscribe(
      res => {
        this.autores = res;
      },
      err => console.error(err)
    )
  }
}
