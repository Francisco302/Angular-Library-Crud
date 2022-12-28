import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/Libro';
import { AutoresService } from 'src/app/services/autores.service';
import { LibroService } from 'src/app/services/libro.service';
import { LibroListComponent } from '../libro-list/libro-list.component';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent {
  @ViewChild(LibroListComponent) libroListComponent: LibroListComponent | undefined;
  @Input() libro: Libro = {
    idLibro : 0,
    ISBNLibro : '',
    idAutor : 0,
    tituloLibro : '',
    valorPrestamoLibro : ''
  }

  libros: any = []
  autores: any = []

  constructor(private libroService: LibroService,
    private autoresService : AutoresService){
    this.libroService.getLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => console.error(err)
    );
    this.autoresService.getAutores().subscribe(
      res => {
        this.autores = res;
      },
      err => console.error(err)
    );
  }
  saveNewLibro(){
    if(this.libros.length < 19) {
      this.libroService.saveLibro(this.libro).subscribe(
        res => {
          // console.log(res);
          // console.log(this.libroListComponent)
          this.libroListComponent?.onSubmit();
          this.libro.ISBNLibro = '';
          this.libro.idAutor = 0;
          this.libro.tituloLibro = '';
          this.libro.valorPrestamoLibro = '';
  
        },
        err => console.error(err)
      )
    }else{

    }
  }

  receiveChildData(data:Libro){
    // console.log(data);
    let x = new Libro(data.idLibro,data.ISBNLibro,data.idAutor,data.tituloLibro,data.valorPrestamoLibro);
    this.libro = x;
  }

  updateLibro(){
    this.libroService.updateLibro(this.libro.idLibro!.toString(),this.libro).subscribe(
      res =>{
        this.libro.ISBNLibro = '';
        this.libro.idAutor = 0;
        this.libro.tituloLibro = '';
        this.libro.valorPrestamoLibro = '';
        this.libroListComponent?.onSubmit();
      },
      err  => console.error(err)
    )
  }
}
