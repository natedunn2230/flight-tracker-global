import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import GlobalSceneComponent from './global-scene/global-scene.component';

const routes: Routes = [
  {'path': 'globe', component: GlobalSceneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
