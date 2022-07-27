import {
	HttpErrorResponse,
	HttpEvent,
	HttpEventType,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { DecreaseBlockCountAction, IncreaseBlockCountAction } from "../store/core.action";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private store: Store) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.Sent) {
                    this.store.dispatch(new IncreaseBlockCountAction());
                } else {
                    this.store.dispatch(new DecreaseBlockCountAction());
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.store.dispatch(new DecreaseBlockCountAction());
                return throwError(error);
            })
        );
    }
}
