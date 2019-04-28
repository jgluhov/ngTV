import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent
  }
];

@NgModule({
  declarations: [ SecondComponent ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SecondModule {}
