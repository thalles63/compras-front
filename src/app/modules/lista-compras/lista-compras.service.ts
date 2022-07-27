import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ListaCompras } from "./models/lista-compras";

@Injectable()
export class ListaComprasService {
    constructor(private http: HttpClient) {}

    private API_URL = `${environment.API_URL}/api/lista`;

    list() {
        return this.http.get<ListaCompras[]>(`${this.API_URL}`);
    }

    save(body: ListaCompras) {
        return this.http.post<ListaCompras>(`${this.API_URL}`, { ...body });
    }

    edit(id: string, body: ListaCompras) {
        return this.http.put<ListaCompras>(`${this.API_URL}/${id}`, { ...body });
    }

    delete(id?: string) {
        return this.http.delete<ListaCompras>(`${this.API_URL}/${id}`);
    }
}
