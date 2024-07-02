import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AddressGroupComponent} from "./address-group.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent, JsonPipe],
  template: `
      <form [formGroup]="form" (ngSubmit)="submit()">
          <div class="form-field">
              <label for="displayName">Display Name</label>
              <input formControlName="displayName" type="text" id="displayName">
          </div>
            <app-address-group controlKey="deliveryAddress"/>
          <button type="submit">Submit</button>
      </form>
      <div>{{ form.value | json }}</div>
  `,
})
export class FormComponent {

  form = new FormGroup({
    displayName: new FormControl(''),
  })

  submit() {
    console.log(this.form.value);
  }
}
