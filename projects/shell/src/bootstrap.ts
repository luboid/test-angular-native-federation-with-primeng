import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(APP_ROUTES),
        provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: Aura
            }
        })
    ]
};


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig);