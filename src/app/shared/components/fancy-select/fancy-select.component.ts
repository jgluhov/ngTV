import { Component, Input, ViewEncapsulation, ViewChild, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectionList } from '@angular/material';
import { Subject } from 'rxjs';
import { FancySelectOptionModel } from './fancy-select-option.model';

export const FANCY_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FancySelectComponent),
  multi: true,
};

@Component({
  selector: 'app-fancy-select',
  templateUrl: './fancy-select.component.html',
  styleUrls: ['./fancy-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FANCY_SELECT_VALUE_ACCESSOR]
})
export class FancySelectComponent implements OnDestroy, ControlValueAccessor  {
  @Input() options: FancySelectOptionModel[];
  @Input() hasDeselectButton: boolean;

  @ViewChild('selectionList') selectionList: MatSelectionList;

  destroyer$: Subject<void> = new Subject();
  onChange;
  onTouch;

  handleMenuClose() {
    const selectedIds = this.selectionList.selectedOptions.selected
      .map((selectedOption) => selectedOption.value);

    this.onChange(selectedIds);
  }

  trackByFn(indx: number) {
    return indx;
  }

  handleMouseDown(evt: Event) {
    evt.stopPropagation();
  }

  deselectAll() {
    this.selectionList.deselectAll();
  }

  ngOnDestroy() {
    this.destroyer$.next();
  }

  writeValue(ids: string[]) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
