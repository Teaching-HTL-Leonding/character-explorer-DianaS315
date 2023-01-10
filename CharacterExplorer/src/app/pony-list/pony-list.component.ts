import { Component, OnInit } from '@angular/core';
import { AirtableDataService } from '../airtable-data.service';
import { Daum, PonyService, Root } from '../pony.service';
import { ActivatedRoute } from '@angular/router';

export interface IDs {
  records: Record[];
}

export interface Record {
  id?: string;
  createdTime?: string;
  fields: Fields;
}

export interface Fields {
  ID: number;
}

@Component({
  selector: 'app-pony-list',
  templateUrl: './pony-list.component.html',
  styleUrls: ['./pony-list.component.css'],
})
export class PonyListComponent implements OnInit {
  public airtableData!: IDs;

  selectedId: number = 0;

  ngOnInit(): void {
    this.ponyService.loadALlPonies();
    this.getFavourites();
  }
  constructor(
    public ponyService: PonyService,
    public database: AirtableDataService
  ) {}

  public getFavourites() {
    this.database
      .loadDataFromTable()
      .subscribe((data) => (this.airtableData = data));
  }

  public changeFavouritism(ponyId: number) {
    let hasChanged: boolean = false;
    const ponyField: Fields = {
      ID: ponyId,
    };
    for (let entry of this.airtableData.records) {
      if (entry.fields.ID === ponyId) {
        this.database
          .deletePonyFromTable(entry.id!)
          .subscribe(() => this.ngOnInit());
        hasChanged = true;
      }
    }
    if (hasChanged === false) {
      this.database.addPonyToTable(ponyField).subscribe(() => this.ngOnInit());
    }
    hasChanged = false;
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
