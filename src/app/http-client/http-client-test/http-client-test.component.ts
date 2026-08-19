import {AsyncPipe, JsonPipe} from "@angular/common";
import {Component, inject} from '@angular/core';
import {FacadeService} from "../facade.service";

@Component({
  selector: 'app-http-client-test',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './http-client-test.component.html',
  styleUrl: './http-client-test.component.scss'
})
export class HttpClientTestComponent {
  readonly facade = inject(FacadeService);
  readonly template$ = this.facade.getTemplate();
}
