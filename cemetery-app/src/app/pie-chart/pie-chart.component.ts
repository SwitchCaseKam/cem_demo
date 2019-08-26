// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: ['./pie-chart.component.css']
// })
// export class PieChartComponent implements OnInit {


//   constructor() { }

//   ngOnInit() {
    
//   }

    

// }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

 
@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html'
})
 
export class PieChartComponent implements OnInit {
  
  allMen: any;
  allWomen: any;

  allMenCount: number; 
  allWomenCount: number;

  public pieChartLabels = ['Mężczyzni', 'Kobiety'];
  public pieChartData = [44, 36];
  public pieChartType = 'pie';
  
  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.getMen();
    this.dataService.getAllMen().subscribe(data => {
      this.allMen = data;
      this.allMenCount = data.length;
    });

    this.dataService.getWomen();
    this.dataService.getAllWomen().subscribe(data => {
      this.allWomen = data;
      this.allWomenCount = data.length;
    });
  }
}
