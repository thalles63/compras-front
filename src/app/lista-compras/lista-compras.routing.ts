import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComprasComponent } from './components/lista-compras.component';

const routes: Routes = [
	{
		path: '',
		component: ListaComprasComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class ListaComprasRoutingModule { }
