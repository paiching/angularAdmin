import { Component } from '@angular/core';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //對應的表單屬性
 idNumber: string = '';
 userName: string = '';
 bankAccount: string = '';
 birthDate: any;

 //console用
 errorCode: string = '';
 message: string ='';

 constructor(private validatorService: ValidatorService) { }

 onSubmit() {

   //獲取輸入欄
   const idNumberInput = document.querySelector('[data-cy="id-number"]') as HTMLInputElement;
   const userNameInput = document.querySelector('[data-cy="username"]') as HTMLInputElement;
   const bankAccountInput = document.querySelector('[data-cy="bank-account"]') as HTMLInputElement;
   const birthDateInput = document.querySelector('[data-cy="birthday"]') as HTMLInputElement;

   //指定到屬性
   this.idNumber = idNumberInput.value;
   this.userName = userNameInput.value; // Convert string to number
   this.bankAccount = bankAccountInput.value;
   this.birthDate = birthDateInput.value;

   // Cypress用來判斷結果
   if (!this.validateForm()) {
     console.log('Form validation failed', { errorCode: this.errorCode, message: this.message});
     return;
   }

     console.log('Form validation passed', { message: "ok"});

     // Implement your form submission logic here

    }

 //驗證邏輯
 validateForm(): boolean {

   if (!this.idNumber || !this.validatorService.validateTaiwanId(this.idNumber)) {
     this.errorCode='101';
     this.message='invalid idNumber';
     return false;
   }


   if (!this.userName || !this.validatorService.validateUserName(this.userName)) {
    this.errorCode='102';
    this.message='invalid userName';
    return false;
  }

  if (!this.bankAccount || !this.validatorService.validateBankAccount(this.bankAccount)) {
    this.errorCode='202';
    this.message='invalid bankAccount';
    return false;
  }

  if (!this.bankAccount || !this.validatorService.validateBirthDate(this.birthDate)) {
    this.errorCode='103';
    this.message='inValid birthDate';
    return false;
  }

   // ... 其他验证 ...

   return true;
 }
}
