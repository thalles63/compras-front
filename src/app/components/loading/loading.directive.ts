import { OnDestroy, Directive, ElementRef, Renderer2 } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[componentState]'
})
export class ComponentStateDirective implements OnDestroy {
    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(
        private loadingService: LoadingService,
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.loadingService.requestsNumber
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: any) => {
                if (response > 0) {
                    this.renderer.addClass(this.el.nativeElement, 'is-loading');
                }

                if (response === 0) {
                    this.renderer.removeClass(this.el.nativeElement, 'is-loading');
                }
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
