import {provideHttpClient} from "@angular/common/http";
import {ApplicationConfig, ErrorHandler, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from '@angular/router';
import {APP_ROUTES, APP_ROUTES_TOKEN} from "./app.routes";
import {ReusableFormComponent} from "./components/forms/reusable-form/reusable-form.component";
import {AboutComponent} from "./components/how-to-use-routes/about/about.component";
import {AdminComponent} from "./components/how-to-use-routes/admin/admin.component";
import {HomeComponent} from "./components/how-to-use-routes/home/home.component";
import {isAdminUserGuard} from './guard/user-flag.guard';
import {HttpClientTestComponent} from "./http-client/http-client-test/http-client-test.component";
import {CustomErrorHandler} from "./shared/custom-error-handler.service";

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: APP_ROUTES_TOKEN, useValue: APP_ROUTES},
    {provide: ErrorHandler, useClass: CustomErrorHandler},
    provideHttpClient(),
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
      {path: APP_ROUTES.HTTP_CLIENT_TEST(), component: HttpClientTestComponent},
      {path: APP_ROUTES.MULTI_STEP_FORM(),
        loadChildren: () => import('./components/forms/multi-step-form/form-container/form-container.routes').then(m => m.FORM_CONTAINER_ROUTES)},
    ], withPreloading(PreloadAllModules), withDebugTracing()),
  ]
};
