import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'channels'
  },
  {
    path: 'first',
    loadChildren: './pages/first/first.module#FirstModule'
  },
  {
    path: 'second',
    loadChildren: './pages/second/second.module#SecondModule'
  },
  {
    path: 'channels',
    loadChildren: './pages/channels/channels.module#ChannelsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
