import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./template.component.html",
    styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
    constructor(private router: Router) {}

    showNavbar = true;

    ngOnInit(): void {
        this.showNavbar = this.router.url !== "/login" && this.router.url !== "/login/password";
    }
}
