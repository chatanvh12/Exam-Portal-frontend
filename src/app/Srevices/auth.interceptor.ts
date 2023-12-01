
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login: LoginService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add the jwt token (LocalStorage ) request
        let authreq = req;
        const token = this.login.getToken();
        console.log(token);
        if (token != null) {
            authreq = authreq.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
                // setHeaders: { Authorization: token },
            });
        }
        return next.handle(authreq);
    }
}

export const AuthInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
];