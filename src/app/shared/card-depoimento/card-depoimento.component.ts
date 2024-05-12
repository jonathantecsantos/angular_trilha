import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
@Input() longText = ''
@Input() src = ''
@Input() alt = ''
}
