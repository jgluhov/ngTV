import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Text } from '@angular/compiler';

export interface IFancySelectOption {
  key: string;
  value: string;
}

@Component({
  selector: 'app-fancy-select',
  templateUrl: './fancy-select.component.html',
  styleUrls: ['./fancy-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FancySelectComponent implements OnInit {
  @Input() options;
  @ContentChild('label') labelEl;

  formGroup = this.fb.group({
    selected: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  trackByFn(indx: number) {
    return indx;
  }
}
