import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Level1Component } from './components/profilepage/level1.component';
import { Level2Component } from './components/profilepage/level2.component';
import { Level3Component } from './components/profilepage/level3.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'profile/level1', component: Level1Component, children: [
      { path: 'level2', component: Level2Component, children: [
          { path: 'level3', component: Level3Component }
        ] }
    ] },
  // convenience paths
  { path: 'profile', redirectTo: 'profile/level1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
