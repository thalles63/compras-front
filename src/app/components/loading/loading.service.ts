import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
	constructor() {}

    private _req = 0;
    public requestsNumber = new Subject<any>();

    reqIncrease() {
        this._req++;
        this.requestsNumber.next(this._req);
    }

    reqDecrease() {
        this._req--;
        this.requestsNumber.next(this._req);
    }

}
