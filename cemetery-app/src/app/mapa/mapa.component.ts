import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
  }

  getTombInfo(event) {
    this.dataService.getInfoAboutTomb(event.target.id);
  }

  
}
