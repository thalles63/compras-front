import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from './components/loading/loading.service';

@Component({
	selector: '[app-root]',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(
		public loadingService: LoadingService
	) {	}

	public requestsNumber = 1;
	private ngUnsubscribe: Subject<any> = new Subject();

	ngOnInit(): void {
		setTimeout(() => {
			this.loadingService.requestsNumber
				.pipe(takeUntil(this.ngUnsubscribe))
				.subscribe((requestsNumber: number) => {
					this.requestsNumber = requestsNumber;
				});
		});
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
