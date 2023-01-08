import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { AirtableDataService } from '../airtable-data.service';
import { IDs } from '../pony-list/pony-list.component';
import { Daum, PonyService, Root } from '../pony.service';

@Component({
  selector: 'app-favourite-ponies',
  templateUrl: './favourite-ponies.component.html',
  styleUrls: ['./favourite-ponies.component.css'],
})
export class FavouritePoniesComponent implements OnInit {
  public ponies!: Root;
  public nameInput: String = ""

  constructor(
    public ponyService: PonyService,
    public database: AirtableDataService
  ) {}

  public airtableData!: IDs;

  ngOnInit(): void {
    this.getAllPonies();
    this.getFavourites();
  }
  public getAllPonies() {
    this.ponyService.loadALlPonies().subscribe((data) => (this.ponies = data));
  }

  public getFavourites() {
    this.database
      .loadDataFromTable()
      .subscribe((data) => (this.airtableData = data));
  }
  public isPonyFav(ponyId: number): boolean {
    for (let entry of this.airtableData.records) {
      if (entry.fields.ID === ponyId) {
        return true;
      }
    }
    return false;
  }

  public getPonies():Daum[]{
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

