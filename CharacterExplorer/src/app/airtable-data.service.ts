import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_URL } from './app.module';
import { IDs, Fields } from './pony-list/pony-list.component';



@Injectable({
  providedIn: 'root',
})
export class AirtableDataService {
  constructor(
    public http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  public loadDataFromTable(): Observable<IDs> {
    return this.http.get<IDs>(
      `https://api.airtable.com/v0/app2blJiUeR3XZj7Y/PonyDatabase`
    );
  }

  public addPonyToTable(ponyId: Fields): Observable<unknown> {
    const body: IDs = {
      records: [{ fields: ponyId }],
    };
    return this.http.post(`${this.baseUrl}`, body);
  }

  public deletePonyFromTable(id: string): Observable<unknown>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
