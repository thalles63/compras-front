import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.scss'],
	animations: [ routeTransitionAnimations ]
})
export class TemplateComponent implements OnInit {
	constructor(
		private router: Router
	) { }

	showNavbar = true;

	ngOnInit(): void {
		console.log(this.router.url)
		this.showNavbar = (this.router.url !== '/login' && this.router.url !== '/login/password')
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animationState'];
	}
}
