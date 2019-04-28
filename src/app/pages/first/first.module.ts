import { NgModule } from '@angular/core';
import { FirstComponent } from './first.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  }
];

@NgModule({
  declarations: [ FirstComponent ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FirstModule {}
