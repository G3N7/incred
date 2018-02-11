import { Component, OnInit, Input } from '@angular/core';
import { Entrant } from '../entrant.dto';

@Component({
  selector: 'inc-entrant',
  templateUrl: './entrant.component.html',
  styleUrls: ['./entrant.component.scss']
})
export class EntrantComponent implements OnInit {
  @Input() entrant: Entrant;

  constructor() {}

  ngOnInit() {}
}
