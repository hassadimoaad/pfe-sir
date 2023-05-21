import { Injectable } from '@angular/core';
import { Employer } from '../model/employer';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private _employer!:Employer;
  // private _employes!:Array<Employer>;
  private url='http://localhost:8036/api/employe';
  constructor(private http:HttpClient) { }

  public save(employe:Employer):Observable<number>{
    return this.http.post<number>(this.url,employe);
  }

  get employer(): Employer {
    if (this._employer == null) {
      this._employer = new Employer();
    }
    return this._employer;
  }

  set employer(value: Employer) {
    this._employer = value;
  }
}
