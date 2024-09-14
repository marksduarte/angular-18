import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {FormStorageDirective} from "../../../../directives/form-storage.directive";
import {FormType} from "../../../../shared/type.util";

export interface FormContainer {
  step1: {
    firstName: string;
    lastName: string;
    birthDate: string;
  },
  step2: {
    address: string;
    city: string;
    state: string;
  }
}

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    FormStorageDirective
  ],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {
  private fb = inject(FormBuilder);

  public readonly form: FormGroup<FormType<FormContainer>> = this.fb.group({
    step1: this.fb.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
    }),
    step2: this.fb.nonNullable.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  });

  get controls(): FormType<FormContainer> {
    return this.form?.controls;
  }
}
