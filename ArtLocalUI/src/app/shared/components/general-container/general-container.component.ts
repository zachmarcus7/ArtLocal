import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.css']
})
export class GeneralContainerComponent implements OnInit {

  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;

  Highcharts: typeof Highcharts = Highcharts
  chartOptions: Highcharts.Options = {
    series: [{
      data: [31, 4, 85, 44],
      type: 'pie'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
