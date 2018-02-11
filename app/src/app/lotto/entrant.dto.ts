import { ClanDistributionItem } from './clan-distribution-item.dto';

export class Entrant {
  name: string;
  numberOfTickets: number;
  avatarUri: string;
  itemWon: ClanDistributionItem;
  isCurserSelected: boolean;
}
