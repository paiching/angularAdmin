import { Component } from '@angular/core';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {

  //對應的表單屬性
  identity: string = '';
  amount: number | null = null;
  date: any ;
  note: string = '';

  constructor(private validatorService: ValidatorService) { }

  onSubmit() {

    //獲取輸入欄
    const identityInput = document.querySelector('[data-cy="identity"]') as HTMLInputElement;
    const amountInput = document.querySelector('[data-cy="amount"]') as HTMLInputElement;
    const effectiveDateInput = document.querySelector('[data-cy="date"]') as HTMLInputElement;
    const noteInput = document.querySelector('[data-cy="note"]') as HTMLInputElement;

    //指定到屬性
    this.identity = identityInput.value;
    this.amount = amountInput.value ? parseFloat(amountInput.value) : null; // Convert string to number
    this.date = effectiveDateInput.value ;//? new Date(effectiveDateInput.value) : null;
    this.note = noteInput.value;

    // Cypress用來判斷結果
    if (!this.validateForm()) {
      console.log('Form validation failed');
      return;
    }

      console.log('Form validation passed', {
      identity: this.identity,
      amount: this.amount,
      date: this.date,
      // ... other form fields ...
    });
    // Implement your form submission logic here
  }

  //驗證邏輯
  validateForm(): boolean {

    if (!this.identity || !this.validatorService.validateIdentity(this.identity)) {
      alert('帳號驗證失敗');
      return false;
    }

    if (!this.validatorService.validateAmount(this.amount)) {
      alert('轉帳金額驗證失敗');
      return false;
    }

    if (!this.validatorService.validateDate(this.date)) {
      alert('轉帳生效日驗證失敗');
      return false;
    }

    if (this.note && !this.validatorService.validateNote(this.note)) {
      alert('交易備註驗證失敗');
      return false;
    }

    // ... 其他验证 ...

    return true;
  }

  // ... other helper methods ...
}
