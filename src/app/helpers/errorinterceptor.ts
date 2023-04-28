import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


// import { AuthenticationService } from '../components/auth/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor( private t:ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {


            switch (err.status) {
              case 400:
                // alert(err);

                this.t.error('', err.error.error,{
                        closeButton: true,
                        tapToDismiss:true,
                  disableTimeOut:true,
                   });
              break;
                case 401:
                  this.t.error('', err.error.error,{
                    closeButton: true,
                    tapToDismiss:true,
              disableTimeOut:true,
               });
                    break;
                    case 404:
                      this.t.error('', err.error.error,{
                        closeButton: true,
                        tapToDismiss:true,
                  disableTimeOut:true,
                   });
                    break;
                case 500:
                  this.t.error('',      err.error.error
                  ,{
                    closeButton: true,
                    tapToDismiss:true,
              disableTimeOut:true,
               });

                    break;

                default:
                    err.error.messages.forEach((error:any) => {
                        alert('يرجي التأكد من ادخال بيانات صحيحه');
                    });

                    break;
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
