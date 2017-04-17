import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheGridComponent } from './editor/the-grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid-layout', pathMatch: 'full' },
  { path: 'grid-layout', component: TheGridComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
