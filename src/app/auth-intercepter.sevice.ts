import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EventType } from "@angular/router";
import { Observable, tap } from "rxjs";


export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("THe Data is it way!");
        const modifiedReq = req.clone({
            headers : req.headers.append('Auth' , 'xyz')
        });
        return next.handle(modifiedReq).pipe(tap(event=>{
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log("Respomce uis Arive ");
                console.log(event.body);
            }
        }));
    }

}