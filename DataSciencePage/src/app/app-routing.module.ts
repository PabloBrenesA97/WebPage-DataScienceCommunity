import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ViewGistComponent } from './components/view-gist/view-gist.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "gist", component: ViewGistComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
