import { Component, OnInit } from '@angular/core';
import { Entrant } from '../entrant.dto';
import { GetAllEntrantsService } from '../get-all-entrants.service';
import { PickWinnerService } from '../pick-winner.service';
import { attachEmbeddedView } from '@angular/core/src/view/view_attach';
import { ShuffleService } from '../shuffle.service';
import { RandomNumberService } from '../random-number.service';
import { TicketOverrideService } from '../ticket-override.service';
import { ClanDistributionItem } from '../clan-distribution-item.dto';

@Component({
  selector: 'inc-all-entrants',
  templateUrl: './all-entrants.component.html',
  styleUrls: ['./all-entrants.component.scss'],
  providers: [
    GetAllEntrantsService,
    PickWinnerService,
    ShuffleService,
    RandomNumberService,
    TicketOverrideService
  ]
})
export class AllEntrantsComponent implements OnInit {
  allEntrants: Entrant[];
  blessedWinner: Entrant[] = [];
  rAttributeStoneWinner: Entrant[] = [];
  sAttributeStoneWinner: Entrant[] = [];
  hgEquipBoxWinner: Entrant[] = [];

  constructor(
    private _getAllEntrantsService: GetAllEntrantsService,
    private _pickWinnerService: PickWinnerService,
    private _shuffleService: ShuffleService
  ) { }

  ngOnInit() {
    this.allEntrants = this._getAllEntrantsService.getAllEntrants();
  }

  private _raffle(whatDidTheyWin: ClanDistributionItem, whereToPutThem: Entrant[]) {
    const shuffledEntrants = this._shuffleService.shuffle(
      this.allEntrants
    );

    let currentDelay = 0;
    shuffledEntrants.forEach((entrant, index) => {
      currentDelay += 200;
      setTimeout(() => {
        if (index > 0) {
          shuffledEntrants[index - 1].isCurserSelected = false;
        }
        entrant.isCurserSelected = true;
      }, currentDelay);
    });

    setTimeout(() => {
      shuffledEntrants.forEach(x => (x.isCurserSelected = false));
      const winner = this._pickWinnerService.pickWinner(this.allEntrants);
      winner.itemsWon.push(whatDidTheyWin);
      whereToPutThem.push(winner);
      winner.numberOfTickets--;
    }, currentDelay + 200);
  }

  raffleBlessed(): void {
    this._raffle({
      imageUri: './assets/blessed-scroll-box.png',
      name: 'Blessed Scroll Box'
    }, this.blessedWinner);
  }
  raffleAttributeR(): void {
    this._raffle({
      imageUri: './assets/attribute-stone-r-grade.png',
      name: 'R - Attribute Stone'
    }, this.rAttributeStoneWinner);
  }
  raffleAttributeS(): void {
    this._raffle({
      imageUri: './assets/attribute-stone-s-grade.png',
      name: 'S - Attribute Stone'
    }, this.sAttributeStoneWinner);
  }

  raffleHgEquipBox(): void {
    this._raffle({
      imageUri: './assets/hg-equip-box.png',
      name: '12 x HG Equip Box'
    }, this.hgEquipBoxWinner);
  }
}
