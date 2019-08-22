import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  myControl = new FormControl();
  allPeople: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllPeople().subscribe(data => {
      this.allPeople = data;
    });
    console.log(this.allPeople)
  }

}
