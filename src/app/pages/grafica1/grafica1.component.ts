import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
  public salesLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public productLabels: Label[] = ['Xbox', 'PS5', 'Wi-U'];
  public personLabels: Label[] = ['Peter', 'Jhon', 'Rodrigo'];
  public jobLabels: Label[] = ['administrator', 'sales person', 'buy person'];
  public salesData: MultiDataSet = [
    [350, 450, 100]
  ];
  public productoData: MultiDataSet = [
    [200, 40, 120]
  ];
  public personData: MultiDataSet = [
    [50, 50, 110]
  ];
  public jobData: MultiDataSet = [
    [300, 400, 900]
  ];

  public colors: Color[] = [
    { backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
