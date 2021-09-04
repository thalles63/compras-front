import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
	{
		path: '',
		component: TemplateComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'compras',
				loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule)
			}
		]
	},
    
	// { path: 'error/not-found', component: CittaErrorPageComponent },
	// { path: 'error/tenant', component: CittaTenantErrorPageComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	providers: [
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
