import { NgModule } from '@angular/core';

//modulos
import { FormsModule } from '@angular/forms';

//componentes
import { IncrementadorComponent } from "./incrementador/incrementador.component";


@NgModule({
    declarations:[
        IncrementadorComponent
    ],
    exports:[
        IncrementadorComponent
    ],
    imports:[
        FormsModule
    ]
})
export class ComponentsModule {}