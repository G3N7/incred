import { Component, OnInit } from '@angular/core';
import { Entrant } from '../entrant.dto';
import { GetAllEntrantsService } from '../get-all-entrants.service';
import { PickWinnerService } from '../pick-winner.service';
import { attachEmbeddedView } from '@angular/core/src/view/view_attach';
import { ShuffleService } from '../shuffle.service';
import { RandomNumberService } from '../random-number.service';
import { TicketOverrideService } from '../ticket-override.service';

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
  rAttributeStoneWinner: Entrant;
  sAttributeStoneWinner: Entrant[] = [];
  hgEquipBoxWinner: Entrant[] = [];

  constructor(
    private _getAllEntrantsService: GetAllEntrantsService,
    private _pickWinnerService: PickWinnerService,
    private _shuffleService: ShuffleService
  ) {}

  ngOnInit() {
    this.allEntrants = this._getAllEntrantsService.getAllEntrants();
  }

  private _raffle(pickWinner: () => void) {
    const entrantsThatHaveNotWon = this.allEntrants.filter(
      x => x.itemWon == null
    );
    const shuffledEntrants = this._shuffleService.shuffle(
      entrantsThatHaveNotWon
    );

    let currentDelay = 0;
    shuffledEntrants.forEach((entrant, index) => {
      currentDelay += 200;
      setTimeout(() => {
        console.log(`Highlighting ${entrant.name}`);
        if (index > 0) {
          shuffledEntrants[index - 1].isCurserSelected = false;
        }
        entrant.isCurserSelected = true;
      }, currentDelay);
    });

    setTimeout(() => {
      shuffledEntrants.forEach(x => (x.isCurserSelected = false));
      pickWinner();
    }, currentDelay + 200);
  }

  raffleBlessed(): void {
    this._raffle(() => {
      const blessedWinner = this._pickWinnerService.pickWinner(
        this.allEntrants
      );
      blessedWinner.itemWon = {
        imageUri: './assets/blessed-scroll-box.png',
        name: 'Blessed Scroll Box'
      };
      this.blessedWinner.push(blessedWinner);
    });
  }
  raffleAttributeR(): void {
    this._raffle(() => {
      this.rAttributeStoneWinner = this._pickWinnerService.pickWinner(
        this.allEntrants
      );
      this.rAttributeStoneWinner.itemWon = {
        imageUri: './assets/attribute-stone-r-grade.png',
        name: 'R - Attribute Stone'
      };
    });
  }
  raffleAttributeS(): void {
    this._raffle(() => {
      const attributeStoneWinner = this._pickWinnerService.pickWinner(
        this.allEntrants
      );
      attributeStoneWinner.itemWon = {
        imageUri: './assets/attribute-stone-s-grade.png',
        name: 'S - Attribute Stone'
      };
      this.sAttributeStoneWinner.push(attributeStoneWinner);
    });
  }

  raffleHgEquipBox(): void {
    this._raffle(() => {
      const attributeStoneWinner = this._pickWinnerService.pickWinner(
        this.allEntrants
      );
      attributeStoneWinner.itemWon = {
        imageUri: './assets/hg-equip-box.png',
        name: '10 x HG Equip Box'
      };
      this.sAttributeStoneWinner.push(attributeStoneWinner);
    });
  }
}
