import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {
  MatTabsModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { FancySelectComponent } from './components/fancy-select/fancy-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const materialModules = [
  MatTabsModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
];

const components = [
  HeaderComponent,
  FancySelectComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class SharedModule { }
