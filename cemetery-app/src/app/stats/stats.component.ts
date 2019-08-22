import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  allPeople: any;
  allPeopleCount: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      this.allPeople = data;
      this.allPeopleCount = data.length;
    });
  }


}
