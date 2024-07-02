import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-address-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  template: `
      <fieldset [formGroupName]="controlKey">
          <legend>{{label}}</legend>
          <div class="form-field">
              <label for="zipCode">Zip Code</label>
              <input type="text" id="zipCode" formControlName="zipCode">
          </div>
          <div class="form-field">
              <label for="address">Street</label>
              <input type="text" id="address" formControlName="street">
          </div>
      </fieldset>

  `,
})
export class AddressGroupComponent implements OnInit, OnDestroy {

  parentContainer = inject(ControlContainer);

  @Input({required: true}) controlKey!: string;
  @Input() label!: string;

  private _innerFormGroup = new FormGroup({
    zipCode: new FormControl(''),
    street: new FormControl('')
  })

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.controlKey, this._innerFormGroup);
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
