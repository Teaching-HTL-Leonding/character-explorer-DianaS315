import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPonyInformationComponent } from './detailed-pony-information/detailed-pony-information.component';
import { FavouritePoniesComponent } from './favourite-ponies/favourite-ponies.component';
import { PonyListComponent } from './pony-list/pony-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/pony-list'},
  {path: 'pony-list', component: PonyListComponent},
  {path: 'favourite-ponies', component: FavouritePoniesComponent},
  {path: 'detailed-pony-information', component: DetailedPonyInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
