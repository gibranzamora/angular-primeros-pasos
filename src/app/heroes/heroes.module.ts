/**
 * import { CommonModule } from '@angular/common';
 * Exporta todas las directivas y canales básicos de Angular, como NgIf,
  NgForOf, DecimalPipe, etc. Reexportado por BrowserModule, que se incluye
  automáticamente en el AppModule raíz cuando crea una nueva aplicación con
  el comando new de la CLI.
**/
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports : [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule{

}
