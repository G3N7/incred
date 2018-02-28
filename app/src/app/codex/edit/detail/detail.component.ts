import { Component, OnInit, Input } from '@angular/core';
import { CodexDetailRow } from './codex-detail.row';

@Component({
  selector: 'inc-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor() {}

  @Input() codex: CodexDetailRow;

  ngOnInit() {}
}
