import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyListComponent } from '../pony-list.component';
import { Daum, PonyService } from '../../pony.service';

@Component({
  selector: 'app-detailed-pony-information',
  templateUrl: './detailed-pony-information.component.html',
  styleUrls: ['./detailed-pony-information.component.css'],
})
export class DetailedPonyInformationComponent implements OnInit {
  public pony!: Daum | undefined;
  public ponyId: String = '0';

  constructor(
    public ponyService: PonyService,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.ponyId = this.activatedRoute.snapshot.params['id'];
    this.pony = this.ponyService.ponies.data.find(
      (x) => x.id.toLocaleString() === this.ponyId
    );
  }

}
