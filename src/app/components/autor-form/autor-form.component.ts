import { Component, Input, ViewChild } from '@angular/core';
import {AutoresService} from '../../services/autores.service';
import { Autor } from 'src/app/models/Autor';
import { AutorListComponent } from '../autor-list/autor-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
  
})
export class AutorFormComponent {
  @ViewChild(AutorListComponent) autorListComponent:AutorListComponent | undefined;
  @Input()  autor: Autor = {
    idAutor: 0,
    codigoAutor: '',
    nombreAutor: '',
    apellidoAutor: '',
  }

  autores: any = []

  constructor(private autorService: AutoresService,
    private router: Router){
    this.autorService.getAutores().subscribe(
      res => {
        this.autores = res;
      },
      err => console.error(err)
    )
  }
  saveNewAutor(){
    
    if(this.autores.length < 19) {
      this.autorService.saveAutor(this.autor).subscribe(
        res => {
          //console.log(res);
          // console.log(this.autorListComponent)
          this.autorListComponent?.onSubmit();
          this.autor.nombreAutor = '';
          this.autor.apellidoAutor = '';
          //window.location.reload();
        },
        err => console.error(err)
      )
    }
  }

  receiveChildData(data:Autor){
    // console.log(data);
    let x = new Autor(data.idAutor,data.codigoAutor,data.nombreAutor,data.apellidoAutor);
    this.autor = x;
  }

  updateAutor(){
    this.autorService.updateAutor(this.autor.idAutor!.toString(),this.autor).subscribe(
      res =>{
        this.autor.codigoAutor = '';
        this.autor.nombreAutor = '';
        this.autor.apellidoAutor = '';
        this.autorListComponent?.onSubmit();
      },
      err  => console.error(err)
    )
  }
  
}
