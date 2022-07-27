import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { LoadingComponent } from "./components/loading/loading.component";
import { LoadingInterceptor } from "./components/loading/loading.interceptor";
import { CoreState } from "./components/store/core.state";
import { AuthGuard } from "./login/auth.guard";
import { AuthInterceptor } from "./login/auth.interceptor";
import { LoginModule } from "./login/login.module";
import { TemplateModule } from "./template/template.module";

@NgModule({
    declarations: [AppComponent, LoadingComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TemplateModule,
        HttpClientModule,
        LoginModule,
        NgxsModule.forRoot([CoreState]),
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
            registrationStrategy: "registerWhenStable:30000"
        })
    ],
    providers: [
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
