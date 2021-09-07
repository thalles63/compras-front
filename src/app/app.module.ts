import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './login/auth.guard';
import { LoginService } from './login/login.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TemplateModule,
        BrowserAnimationsModule
    ],
    providers: [ AuthGuard, LoginService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
