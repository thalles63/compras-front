import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { LoadingService } from "./loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(
        private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
		if (req.url.includes('/api')) {
			return next.handle(req).pipe(
				map((event: HttpEvent<any>) => {
					if (event.type === 0) {
						this.loadingService.reqIncrease();
					} else {
						this.loadingService.reqDecrease();
					}
					return event;
				}),
				catchError((error: HttpErrorResponse) => {
					this.loadingService.reqDecrease();
					return throwError(error);
				}));
		} else {
			return next.handle(req).pipe(
				catchError((error: HttpErrorResponse) => {
					return throwError(error);
				})
			);
		}
	}
}