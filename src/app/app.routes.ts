import {InjectionToken} from "@angular/core";

export const APP_ROUTES_TOKEN = new InjectionToken<Record<AppRoutesKeys, (path?: string) =>string>>('App Routes');

export const APP_ROUTES = {
    HOME: (relativePath = '') => relativePath + '',
    ABOUT: (relativePath = '') => relativePath + 'about',
    MULTI_STEP_FORM: (relativePath = '') => relativePath + 'multi-step',
    REUSABLE_FORM: (relativePath = '') => relativePath + 'reusable',
}

type AppRoutesKeys = keyof typeof APP_ROUTES;
