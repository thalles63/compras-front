import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ListaCompras } from "./models/lista-compras";

@Injectable()
export class ListaComprasService {
    constructor(private http: HttpClient) {}

    private API_URL = environment.API_URL;

    list() {
        return this.http.get<ListaCompras[]>(`${this.API_URL}/api/lista`);
    }

    save(body: ListaCompras) {
        return this.http.post<ListaCompras>(`${this.API_URL}/api/lista`, { ...body });
    }

    edit(id: string, body: ListaCompras) {
        return this.http.put<ListaCompras>(`${this.API_URL}/api/lista/${id}`, { ...body });
    }

    delete(id?: string) {
        return this.http.delete<ListaCompras>(`${this.API_URL}/api/lista/${id}`);
    }
}
