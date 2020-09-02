import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }


  private path = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json';



  getCountries():Observable<Country[]> {
  return this.httpClient.get<Country[]>(this.path)
  }
  

}
