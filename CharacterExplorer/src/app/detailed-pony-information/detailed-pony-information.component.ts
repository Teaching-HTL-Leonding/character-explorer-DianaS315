import { Component } from '@angular/core';
import { PonyListComponent } from '../pony-list/pony-list.component';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-detailed-pony-information',
  templateUrl: './detailed-pony-information.component.html',
  styleUrls: ['./detailed-pony-information.component.css']
})
export class DetailedPonyInformationComponent {

  constructor(public ponyService: PonyService, public ponies: PonyListComponent){}

  public findSelectedPony(id: number){
  }

}
