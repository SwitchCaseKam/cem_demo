import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { CemeteryLayoutComponent } from './cemetery-layout/cemetery-layout.component'

const routes: Routes = [
  { path: 'map', component: CemeteryLayoutComponent },
  { path: 'stats', component: StatsComponent }, 
  { path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CemeteryLayoutComponent, StatsComponent, HomeComponent]
