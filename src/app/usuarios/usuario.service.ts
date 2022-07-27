import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Usuario } from "../usuarios/usuario";

@Injectable()
export class UsuariosService {
    constructor(private http: HttpClient) {}

    private API_URL = environment.API_URL;

    getUsuarios() {
        return this.http.get<Usuario[]>(`${this.API_URL}/api/usuarios`);
    }
}
