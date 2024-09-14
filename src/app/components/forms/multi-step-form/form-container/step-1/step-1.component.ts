import {Component, inject} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {FormContainerComponent} from "../form-container.component";

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class Step1Component {
  private readonly formContainer = inject(FormContainerComponent);

  public get formStep1(): FormGroup {
    return this.formContainer.controls.step1;
  }
}
