import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Configs } from "./models/config";

@Injectable()
export class ConfigsService {
    constructor(private http: HttpClient) {}

    private API_URL = environment.API_URL;

    get(user: number) {
        return this.http.get<Configs>(`${this.API_URL}/api/configs/${user}`);
    }

    edit(body: Configs) {
        return this.http.put<Configs>(`${this.API_URL}/api/configs/${body.usuario}`, { ...body });
    }
}
