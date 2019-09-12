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

  public barChartLabels = ['1960','1961','1962','1963','1964','1965','1966','1967','1968','1969',
      '1970','1971','1972','1973','1974','1975','1976','1977','1978','1979',
      '1980','1981','1982','1983','1984','1985','1986','1987','1988','1989',
      '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
      '2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
      '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: ['19','15','11','14','10','14','18','11','8','2','16',
    '17','21','5','19','22','27','9','25','18','12','1','3','9',
    '13','26','22','9','5','24','15','17','21','27','21','16',
    '8','7','2','18','30','7','1','3','12','18','26','26','29',
    '29','14','27','7','26','12','21','4','24','21','13'], label: 'Liczba zmarłych w danym roku'}
  ];

  constructor() { }

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(33, 18, 78, .5)',
      borderColor: 'rgba(0, 0, 0, .7)',
      borderWidth: 2,
    }
  ];
  ngOnInit() {
  }

}
