import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from '@angular/router';
import {APP_ROUTES, APP_ROUTES_TOKEN} from "./app.routes";
import {FormContainerComponent} from "./components/forms/multi-step-form/form-container/form-container.component";
import {HomeComponent} from "./components/how-to-use-routes/home/home.component";
import {AboutComponent} from "./components/how-to-use-routes/about/about.component";
import {AdminComponent} from "./components/how-to-use-routes/admin/admin.component";
import {isAdminUserGuard} from './guard/user-flag.guard';
import {ReusableFormComponent} from "./components/forms/reusable-form/reusable-form.component";

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: APP_ROUTES_TOKEN, useValue: APP_ROUTES},
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter([
      /* Utilizando o canMatch, é possível definir componentes distintos para a mesma rota.
       Quando o Angular encontrar uma rota que corresponda a um canMatch, ele irá verificar se a função retorna true.
       Se a função retornar true, o Angular irá renderizar o componente correspondente.
       Se a função retornar false, o Angular irá continuar a busca pela próxima rota.*/
      {path: APP_ROUTES.HOME(), component: AdminComponent, canMatch: [isAdminUserGuard()]},
      {path: APP_ROUTES.HOME(), component: HomeComponent},
      {path: APP_ROUTES.ABOUT(), component: AboutComponent},
      {path: APP_ROUTES.REUSABLE_FORM(), component: ReusableFormComponent},
      {path: APP_ROUTES.MULTI_STEP_FORM(),
        loadChildren: () => import('./components/forms/multi-step-form/form-container/form-container.routes').then(m => m.FORM_CONTAINER_ROUTES)},
    ], withPreloading(PreloadAllModules), withDebugTracing()),
  ]
};
