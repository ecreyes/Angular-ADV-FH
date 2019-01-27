import { NgModule } from '@angular/core';

//modulos
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";

//rutas
import { PAGES_ROUTES } from "./pages.routes";

//componentes
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from "./pages.component";

@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ],
    imports:[
        FormsModule,
        SharedModule,
        ComponentsModule,
        PAGES_ROUTES,
    ]
})
export class PagesModule {}