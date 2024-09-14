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
              <label class="form-label" for="zipCode">Zip Code</label>
              <input class="form-control" type="text" id="zipCode" formControlName="zipCode">
          </div>
          <div class="form-field">
              <label class="form-label" for="address">Street</label>
              <input class="form-control" type="text" id="address" formControlName="street">
          </div>
      </fieldset>

  `,
})
export class AddressGroupComponent implements OnInit, OnDestroy {

  // Faz a injeção do parent ignorando o AddressGroupComponent.
  // A configuração skipSelf no factory do viewProviders é a responsável por isso;
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
    // registra o formGroup no parent.
    this.parentFormGroup.addControl(this.controlKey, this._innerFormGroup);
  }

  ngOnDestroy() {
    // remove o formGroup do parent.
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
