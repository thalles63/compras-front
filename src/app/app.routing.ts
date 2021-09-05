import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
	{
		path: '',
		component: TemplateComponent,
		canActivateChild: [ AuthGuard ],
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'compras',
				loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule)
			},
			{
				path: 'lista-compras',
				loadChildren: () => import('./lista-compras/lista-compras.module').then(m => m.ListaComprasModule)
			},
			{
				path: 'configs',
				loadChildren: () => import('./configs/configs.module').then(m => m.ConfigsModule)
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent
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
