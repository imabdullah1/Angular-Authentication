import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { compileNgModule } from "@angular/compiler";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const modifiedReq = req.clone({
        headers: req.headers.append('login','zyx')
      });

      
      
        return next.handle(modifiedReq).pipe(tap(event=>{
            if(event.type === HttpEventType.Response) {
                console.log(event);
                console.log("The second Interceptor for Login");
                console.log(event.body);
            }
        }));

    }

}