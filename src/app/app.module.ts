import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AutorFormComponent } from './components/autor-form/autor-form.component';
import { AutorListComponent } from './components/autor-list/autor-list.component';

import { AutoresService } from './services/autores.service';
import { PrestamoListComponent } from './components/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { DetallePrestamoFormComponent } from './components/detalle-prestamo-form/detalle-prestamo-form.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AutorFormComponent,
    AutorListComponent,
    PrestamoListComponent,
    PrestamoFormComponent,
    DetallePrestamoFormComponent,
    LibroListComponent,
    LibroFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AutoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
