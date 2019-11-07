import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RutasComponent } from './rutas/rutas.component';
import { AdsComponent } from './ads/ads.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'rutas' , component: RutasComponent},
  {path: 'ads' , component: AdsComponent},
  {path: 'videos' , component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routesComponents = [HomeComponent, RutasComponent, AdsComponent, VideosComponent];
