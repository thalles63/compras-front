import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';

@Injectable()
export class UsuariosService {
    constructor(
        private http: HttpClient
    ) { }

    private API_URL = environment.API_URL + '/api/usuarios';

    getUsuarios() {
        return this.http.get<Usuario[]>(`${this.API_URL}`);
    }
}
