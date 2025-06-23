import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoTodoService } from './services/in-memory-todo.service';
import { TodoService } from './services/todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), 
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoTodoService)
    ]),
    TodoService,
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};

