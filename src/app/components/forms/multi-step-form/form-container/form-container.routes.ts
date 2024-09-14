import {Routes} from "@angular/router";
import {FormContainerComponent} from "./form-container.component";

export const FORM_CONTAINER_ROUTES: Routes = [
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'step-1'
      },
      {
        path: 'step-1',
        loadChildren: () => import('./step-1/step-1.routes').then(m => m.STEP_1_ROUTES),
      },
      {
        path: 'step-2',
        loadChildren: () => import('./step-2/step-2.routes').then(m => m.STEP_2_ROUTES),
      }
    ]
  }
];
