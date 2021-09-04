import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'compras-list',
	templateUrl: './compras-list.component.html',
	styleUrls: [ './compras-list.component.scss' ]
})
export class ComprasListComponent implements OnInit {
	constructor(
	) {}

    @Input() list: any = [];

	ngOnInit(): void {
    // jhgjhgjg
  }
}
