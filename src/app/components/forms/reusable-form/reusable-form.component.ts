import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AddressGroupComponent} from "./address-group.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent, JsonPipe],
  template: `
      <form class="mb-4" [formGroup]="form" (ngSubmit)="submit()">
          <div class="form-field">
              <label class="form-label" for="displayName">Display Name</label>
              <input class="form-control" formControlName="displayName" type="text" id="displayName">
          </div>
          <!-- Componente que ao ser renderizado, registra seus controles no formulário do parent -->
          <app-address-group controlKey="deliveryAddress"/>
          <button class="mt-3 btn btn-success" type="submit">Submit</button>
      </form>
      <pre class="bg-dark text-white">{{ form.value | json }}</pre>
  `,
})
export class ReusableFormComponent {

  form = new FormGroup({
    displayName: new FormControl(''),
  })

  submit() {
    console.log(this.form.value);
  }
}
