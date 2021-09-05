import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
	) {}

    users: any = [
        {
            nome: "Thalles Leonardelli",
            imgNome: "thalles"
        },
        {
            nome: "Thays Maineri",
            imgNome: "Thays"
        }
    ]

	ngOnInit(): void {
    // jhgjhgjg
  }
}
