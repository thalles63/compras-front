import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./models/user";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    private API_URL = environment.API_URL;

    login(username: string, password: string) {
        return this.http.post<User>(`${this.API_URL}/api/login`, { username, password });
    }

    getUsuarios() {
        return this.http.get<User[]>(`${this.API_URL}/api/usuarios`);
    }
}
