import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExercicesComponent } from './list-exercices/list-exercices.component';


const routes: Routes = [
    { path: '', component: ListExercicesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
