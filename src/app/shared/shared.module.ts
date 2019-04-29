import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {
  MatTabsModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FancySelectComponent } from './components/fancy-select/fancy-select.component';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

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
