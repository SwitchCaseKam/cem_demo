import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  isClicked = false;
  markedElement: any = {
    x: -10,
    y: -10,
    height: 0,
    width: 0  
  }

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
  }

  getTombInfo(event) {
    this.dataService.getInfoAboutTomb(event.target.id);
    this.isClicked = true;
    console.log(this.isClicked);
    console.log('Parameters of clicked')
    console.log(event.target.y);
    console.log(event.target.x.animVal.value);
    console.log(event.target.y.animVal.value);
    console.log(event.target.height.animVal.value);
    console.log(event.target.width.animVal.value);
    this.markedElement.x = event.target.x.animVal.value + event.target.width.animVal.value/2 + '%';
    this.markedElement.y = event.target.y.animVal.valueInSpecifiedUnits + 1.5*event.target.height.animVal.value + '%';
    this.markedElement.height = event.target.height.animVal.value + '%';
    this.markedElement.width = event.target.height.animVal.value + '%';
    console.log(this.markedElement);
  }
  
  getX() {
    return this.markedElement.x;
  }
  
}
