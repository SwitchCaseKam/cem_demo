import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

export class SearcherComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  allPeople: any;
  chosenTombId: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople();
    this.dataService.getAllPeople().subscribe(data => {
      
      this.allPeople = data;
      this._createPeopleOptions(this.allPeople);
      
    });
   
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _createPeopleOptions(allPeople: any) {

    for (let person of this.allPeople) {
      this.options.push(person.tombId + " " + person.name + " " + person.surname);
    }
  }

  public getChosenPerson(value) {
    this.chosenTombId = value.split(' ')[0];
  }

  public getTombInfo() {
    this.dataService.getInfoAboutTomb(this.chosenTombId);
  }



}
