import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Person } from './person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'http://localhost:3000';
  currentTomb: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getPersonById(id: number){
    this.httpClient.get(`${this.apiUrl}/people/${id}`).subscribe((res)=>{
      console.log(res);
      return res;
  });
  };

  public getPeople(url?: string){
    return this.httpClient.get<Person[]>(`${this.apiUrl}/customers`);
  };
  
  public getTombById(id: number){
    this.httpClient.get(`${this.apiUrl}/people?tombId=${id}`).subscribe((res)=>{
      this.currentTomb = JSON.stringify(res);
      console.log(this.currentTomb)

  });

  };

  public getTombs(url?: string){};

  public getCurrentTomb(){
    return this.currentTomb;
  }

  getInfoAboutTomb(tombId: number) {
    console.log("tomb clicked");
    console.log(this.getTombById(tombId));
  }

  // getDetailsInfoText() {

  //   console.log(this.temp);
  //   return this.temp;
 
  // }
}
