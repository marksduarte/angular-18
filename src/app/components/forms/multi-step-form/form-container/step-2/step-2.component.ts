import {Component, inject} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AddressService} from "../../../../../shared/address.service";
import {FormContainerComponent} from "../form-container.component";

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.css'
})
export class Step2Component {
  private readonly formContainer = inject(FormContainerComponent);
  private readonly addressService = inject(AddressService);

  public get formStep2(): FormGroup {
    return this.formContainer.controls.step2;
  }

  public get unidadesFederativas() {
    return this.addressService.unidadesFederativas;
  }

  submit() {
    alert(`Form submitted: ${this.formStep2.value}`);
  }
}
