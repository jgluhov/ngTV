import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  OnDestroy,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectionList, MatSelectionListChange, MatListItem, MatListOption } from '@angular/material';
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
  @Input() multiple: boolean;

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

  handleSelectionChange({ option }: MatSelectionListChange) {
    if (!this.multiple) {
      this.deselectAll();
      option.selected = true;
    }
  }

  handleMouseDown(evt: Event) {
    if (this.multiple) {
      evt.stopPropagation();
    }
  }

  selectOption(option: MatListOption) {
    if (!this.multiple) {
      this.deselectAll();
    }

    option.selected = true;
  }

  deselectAll() {
    this.selectionList.deselectAll();
  }

  ngOnDestroy() {
    this.destroyer$.next();
  }

  writeValue(value: string | string[]) {
    setTimeout(() => {
      this.selectionList.options
        .filter(option => value.includes(option.value))
        .forEach(option => this.selectOption(option));
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
