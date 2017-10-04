import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers, XHRBackend } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Components
import { AppComponent } from './app.component';

// Providers
import { ApiServiceService } from './api-service.service';
import { UrlConfig } from './shared/urlService';

// Routes
import { routing } from './app.router';

// Shared
import { HttpInterceptor } from './shared/interceptor'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    ApiServiceService,
    UrlConfig,
    {
      provide: HttpInterceptor,
      useFactory:
      (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new HttpInterceptor(backend, defaultOptions);
      },
      deps: [XHRBackend, RequestOptions]
    }
    // urlConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
