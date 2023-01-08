import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirtableDataService } from './airtable-data.service';
import { BASE_URL } from './app.module';
import { Fields, IDs } from './pony-list/pony-list.component';
import { Record } from './pony-list/pony-list.component';

export interface Root {
  status?: number;
  data: Daum[];
}

export interface Daum {
  id: number;
  name: string;
  alias?: string;
  url: string;
  sex: string;
  residence?: string;
  occupation?: string;
  kind: string[];
  image: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PonyService {
  constructor(
    private http: HttpClient,
    public database: AirtableDataService,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  public airtableData!: IDs;

  public loadALlPonies(): Observable<Root> {
    return this.http.get<Root>('http://ponyweb.ml/v1/character/all');
  }
}
