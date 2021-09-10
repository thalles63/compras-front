import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginModule } from './login/login.module';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './components/loading/loading.interceptor';
import { LoadingService } from './components/loading/loading.service';

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TemplateModule,
        BrowserAnimationsModule,
        LoginModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [ 
        AuthGuard, 
        LoginService,
        LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
     ],
    bootstrap: [AppComponent]
})
export class AppModule { }
