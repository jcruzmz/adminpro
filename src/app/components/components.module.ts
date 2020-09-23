import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [IncrementadorComponent, GraficaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ], exports: [
    IncrementadorComponent,
    GraficaComponent
  ]
})
export class ComponentsModule { }
