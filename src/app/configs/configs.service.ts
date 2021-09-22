import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Configs } from './models/config';

@Injectable()
export class ConfigsService {
    constructor(
        private http: HttpClient
    ) { }

    private API_URL = environment.API_URL + '/api/configs';

    get(user: string) {
        return this.http.get<Configs>(`${this.API_URL}/${user}`);
    }

    edit(body: Configs) {
        return this.http.put<Configs>(`${this.API_URL}/${body._id}`, { ...body });
    }
}
