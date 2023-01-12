import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirtableDataService } from './airtable-data.service';
import { BASE_URL } from './app.module';
import { IDs } from './pony-list/pony-list.component';


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
  public ponies!: Root;
  public nameInput: String = ""


  public loadALlPonies() {
    this.http.get<Root>('http://ponyweb.ml/v1/character/all').subscribe((data) => (this.ponies = data));
  }

  public getPonies(): Daum[] {
    let result: Daum[] = this.ponies.data;
    if (this.nameInput !== '' && this.nameInput !== ' ') {
      result = result.filter((datum) =>
        datum.name
          .toLocaleLowerCase()
          .includes(this.nameInput.toLowerCase().toString())
      );
    }
    return result;
  }

}
