import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateComponent } from "src/app/components/template/template.component";
import { AuthGuard } from "src/app/helpers/guards/auth.guard";
import { LoginComponent } from "../login/components/login.component";

const routes: Routes = [
    {
        path: "",
        component: TemplateComponent,
        canActivateChild: [AuthGuard],
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            {
                path: "dashboard",
                loadChildren: () => import("../dashboard/dashboard.module").then((m) => m.DashboardModule)
            },
            {
                path: "gastos",
                loadChildren: () => import("../gastos/gastos.module").then((m) => m.GastosModule)
            },
            {
                path: "lista-compras",
                loadChildren: () => import("../lista-compras/lista-compras.module").then((m) => m.ListaComprasModule)
            },
            {
                path: "configs",
                loadChildren: () => import("../configs/configs.module").then((m) => m.ConfigsModule)
            }
        ]
    },
    {
        path: "login",
        children: [
            {
                path: "",
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
