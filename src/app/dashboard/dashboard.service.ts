import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
	constructor() {}

	getDiasDaSemana() {
        return ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    }

    getMes() {
        return ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    }
}
