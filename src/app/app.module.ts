import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NbThemeModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAuthModule, NbAuthJWTToken, NbPasswordAuthStrategy } from '@nebular/auth';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbThemeModule.forRoot(),
        NgbModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                    baseEndpoint: '',
                    login: {
                        endpoint: '/users/login'
                    },
                    register: {
                        endpoint: '/users/sign-up'
                    },
                    logout: {
                        endpoint: '/users/logout',
                        method:  'POST'
                    },
                    token: {
                        class: NbAuthJWTToken,
                        key: 'token'
                    }
                }),
            ],
            forms: {},
        })
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthGuard
    ],
    exports: [
       NbAuthModule
    ]
})
export class AppModule { }
