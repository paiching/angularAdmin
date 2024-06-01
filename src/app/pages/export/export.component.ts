import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FormGroup } from '@angular/forms';
import { SearchFormComponent } from 'src/app/components/search-form/search-form.component';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
  // standalone: true,
  // imports: [MatCardModule, MatDividerModule,MatButtonModule,SearchFormComponent],
})
export class ExportComponent {

  dynamicForm!: FormGroup;
  selectedCard: number | null = null;


  Text = `工時回報-明細資料(年月, PM/主管)`;
  Text2 = `工時回報-明細資料(年月, PM/主管)`;
  Text3 = `工時回報-明細資料(年月, PM/主管)`;

  selectCard(cardId: number) {

    this.selectedCard = cardId;
    this.updateDynamicFormFields(cardId);
    //let inputValue = (document.getElementById('#proj_pm') as HTMLInputElement).value;
    alert(cardId);
  }


  updateDynamicFormFields(cardId: number) {
    // Based on the card selected, add or remove form controls
    const fieldsConfig = {
    card1: { field1: '', field2: '', field3: '' },
    card2: { field4: '', field5: '' },
    card3: { field6: '', field7: '', field8: '', field9: '' },
    // Define the fields for each card's form
    };
  }

}
