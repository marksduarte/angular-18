import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {APP_ROUTES_TOKEN} from "../../../app.routes";
import {ReusableFormComponent} from "../../forms/reusable-form/reusable-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReusableFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public router = inject(Router);
  public routes = inject(APP_ROUTES_TOKEN);

  navigateToAbout() {
    this.router.navigate([this.routes.ABOUT()]);
  }
}
