import {Directive, input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {debounceTime, Subject, takeUntil} from "rxjs";

@Directive({
  selector: 'form[formGroup][storageKey]',
  standalone: true
})
export class FormStorageDirective implements OnInit, OnDestroy {
  formGroup = input<FormGroup>();
  storageKey = input<string>('');

  private destroy$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.updateFormValue();
    this.listenUpdateValue()
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateFormValue() {
    if (this.storageKey()) {
      const storageItem = localStorage.getItem(this.storageKey()) ?? '';
      if (storageItem) {
        const storageValue = JSON.parse(storageItem);
        if (storageValue) {
          this.formGroup()?.patchValue(storageValue);
        }
      }
    }
  }

  private listenUpdateValue() {
    this.formGroup()?.valueChanges.pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((value: any) => localStorage.setItem(this.storageKey(), JSON.stringify(value)));
  }
}
