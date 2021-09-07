import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/initial/initial.component';
import { LoginPasswordComponent } from './login/password/password.component';
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
				path: 'gastos',
				loadChildren: () => import('./gastos/gastos.module').then(m => m.GastosModule)
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
		component: TemplateComponent,
		children: [
			{ 
                path: '',
                component: LoginComponent,
                data: { animationState: 'One' }
            },
			{ 
                path: 'password',
                component: LoginPasswordComponent,
                data: { animationState: 'Two' }
            }
		]
	}
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
