import { Component, OnInit } from '@angular/core';
import { CodexLookupService } from '../codex-lookup.service';
import { ListAllForUserService } from '../list-all-for-user.service';
import { CodexDetailRow } from './detail/codex-detail.row';

@Component({
  selector: 'inc-codex-edit',
  templateUrl: './codex-edit.component.html',
  styleUrls: ['./codex-edit.component.scss'],
  providers: [ListAllForUserService, CodexLookupService]
})
export class CodexEditComponent implements OnInit {

  constructor(
    private codexLookupService: CodexLookupService,
    private listAllForUserService: ListAllForUserService
  ) {}

  rows: CodexDetailRow[];

  ngOnInit() {
    const allCodex = this.codexLookupService.getAllCodexOptions();
    const usersCodex = this.listAllForUserService.listAll();

    const rows: CodexDetailRow[] = [];
    allCodex.forEach(cl => {
      const usersValue = usersCodex.filter(uc => uc.name === cl.name);
      if (usersValue.length > 0) {
        rows.push({
          record: usersValue[0],
          lookup: cl
        });
      } else {
        rows.push({
          record: {
            name: cl.name,
            levelComplete: 0
          },
          lookup: cl
        });
      }
    });

    this.rows = rows;
  }

}
