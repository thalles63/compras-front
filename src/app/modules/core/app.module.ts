import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from "@angular/service-worker";
import { NgxsModule } from "@ngxs/store";
import { ComponentsModule } from "src/app/components/components.module";
import { TemplateModule } from "src/app/components/template/template.module";
import { AuthGuard } from "src/app/helpers/guards/auth.guard";
import { AuthInterceptor } from "src/app/helpers/interceptors/auth.interceptor";
import { LoadingInterceptor } from "src/app/helpers/interceptors/loading.interceptor";
import { AuthService } from "src/app/helpers/services/auth.service";
import { CoreState } from "src/app/helpers/store/core.state";
import { environment } from "src/environments/environment";
import { LoginModule } from "../login/login.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TemplateModule,
        HttpClientModule,
        LoginModule,
        ComponentsModule,
        NgxsModule.forRoot([CoreState]),
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
            registrationStrategy: "registerWhenStable:30000"
        })
    ],
    providers: [
        AuthGuard,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
