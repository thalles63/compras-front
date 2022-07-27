import { Component } from "@angular/core";
import { User } from "../models/user";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    selectedUser = {} as User;
}
