import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {APP_ROUTES, APP_ROUTES_TOKEN} from "./app.routes";
import {FormComponent} from "./components/forms/reusable-form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, FormComponent],
  providers: [{
    provide: APP_ROUTES_TOKEN,
    useValue: APP_ROUTES
  }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public routes = inject(APP_ROUTES_TOKEN)
}
