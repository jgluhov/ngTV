import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';

const materialModules = [
  MatTabsModule
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    ...materialModules
  ]
})
export class SharedModule { }
