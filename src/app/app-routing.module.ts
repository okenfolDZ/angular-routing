import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TeamListComponent} from "./components/team-list/team-list.component";
import {TeamDetailsComponent} from "./components/team-details/team-details.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'team-list', component: TeamListComponent},
  {path: 'team-details/:id', component: TeamDetailsComponent},
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
