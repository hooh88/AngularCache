import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api = environment.api;
  private accessKey = environment.accessKey;

  constructor(private http: HttpClient) { }

  countries():Observable<Country[]>  {
    return this.http.get<Country[]>(`${this.api}all?access_key=${this.accessKey}`)
  }
  countriesByRegion(region:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api}region/${region}?access_key=${this.accessKey}`)
  }
}
