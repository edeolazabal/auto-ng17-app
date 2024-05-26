import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAutoComponent } from './components/list-auto/list-auto.component';
import { AddAutoComponent } from './components/add-auto/add-auto.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'listauto', component: ListAutoComponent},
  {path: 'addauto', component: AddAutoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
