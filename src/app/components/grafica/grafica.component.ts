import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: []
})
export class GraficaComponent implements OnInit {

  @Input() title: string;
  @Input() colors: Color[] = [];
  @Input() data: MultiDataSet[] = [];
  @Input() labels: Label[] = [];
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }

}
