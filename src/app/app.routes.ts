import {InjectionToken} from "@angular/core";

export const APP_ROUTES_TOKEN = new InjectionToken<Record<AppRoutesKeys, (path?: string) =>string>>('App Routes');

export const APP_ROUTES = {
    HOME: (relativePath = '') => relativePath + '',
    ABOUT: (relativePath = '') => relativePath + 'about',
}

type AppRoutesKeys = keyof typeof APP_ROUTES;
