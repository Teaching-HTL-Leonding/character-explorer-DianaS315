import { Component, OnInit } from '@angular/core';
import { AirtableDataService } from '../airtable-data.service';
import { IDs } from '../pony-list/pony-list.component';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-favourite-ponies',
  templateUrl: './favourite-ponies.component.html',
  styleUrls: ['./favourite-ponies.component.css'],
})
export class FavouritePoniesComponent implements OnInit {
  public nameInput: String = '';

  constructor(
    public ponyService: PonyService,
    public database: AirtableDataService
  ) {}

  public airtableData!: IDs;

  ngOnInit(): void {
    this.ponyService.loadALlPonies();
    this.getFavourites();
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
}
