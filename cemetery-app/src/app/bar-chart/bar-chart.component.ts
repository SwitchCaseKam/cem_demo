import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels = ['1990', '1995', '2000', '2005', '2010', '2015'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [10, 20, 15, 16, 8, 21], label: 'Liczba zmarłych w danym roku'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
