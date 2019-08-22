import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Person } from './person.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'http://localhost:3000';
  currentTomb = new Subject<any>();
  allPeople = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getPeople(url?: string){
    this.httpClient.get(`${this.apiUrl}/people`).subscribe((res)=>{
      this.allPeople.next(res);
      console.log(this.allPeople);
    });
  };
  
  public getTombById(id: number){
    this.httpClient.get(`${this.apiUrl}/people?tombId=${id}`).subscribe((res)=>{
      this.currentTomb.next(res);
    });
  };

  public getCurrentTomb(): Observable<any> {
    return this.currentTomb.asObservable();
  }

  public getAllPeople(): Observable<any> {
    return this.allPeople.asObservable();
  }

  getInfoAboutTomb(tombId: number) {
    this.getTombById(tombId);
  }
}
