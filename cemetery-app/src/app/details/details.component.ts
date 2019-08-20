import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  peopleRaw: string; // = '[{"id":4,"name":"Józef","surname":"Rzegocki","birthDate":"1947-02-21","deathDate":"2005-12-15","tombId":1,"sex":"M"},{"id":6,"name":"Joanna","surname":"Rzegocka","birthDate":"1912-11-01","deathDate":"2007-06-12","tombId":1,"sex":"K"}]'
  people: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }
  // abc = this.dataService.getInfoAboutTomb(1);
  // getText() {
  //   console.log(this.abc)
  //   if (this.abc) {
  //     console.log(this.abc)
  //     this.dataService.getInfoAboutTomb();
  //   }
  //   else {
  //     return this.abc = "nonee"
  //   }
    
  // }

  getCurrentTomb(){
    this.peopleRaw = this.dataService.getCurrentTomb();
    if (this.peopleRaw) {
      this.people = JSON.parse(this.peopleRaw);
    }
  }
}
