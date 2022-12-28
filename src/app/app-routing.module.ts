import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorFormComponent } from './components/autor-form/autor-form.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/autor',
    pathMatch: 'full'
  },
  {
    path: 'autor',
    component: AutorFormComponent
  },
  {
    path: 'libro',
    component: LibroFormComponent
  },
  {
    path: 'prestamo',
    component: PrestamoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
