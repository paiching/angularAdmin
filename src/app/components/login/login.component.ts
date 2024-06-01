import { Component } from '@angular/core';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //對應的表單屬性
  account: string = '';
  password: any;
  captcha: string = '';
  errorCode: string = '';

  constructor(private validatorService: ValidatorService) { }

  onSubmit() {

    //獲取輸入欄
    const accountInput = document.querySelector('[data-cy="account"]') as HTMLInputElement;
    const passwordInput = document.querySelector('[data-cy="password"]') as HTMLInputElement;
    const captchaInput = document.querySelector('[data-cy="captcha"]') as HTMLInputElement;

    //指定到屬性
    this.account = accountInput.value;
    this.password = passwordInput.value ? parseFloat(passwordInput.value) : null; // Convert string to number
    this.captcha = captchaInput.value;

    // Cypress用來判斷結果
    if (!this.validateForm()) {
      console.log('Form validation failed' + "Error code:"+ this.errorCode);
      return;
    }

      console.log('Form validation passed', {
      identity: this.account
      // ... other form fields ...
    });
    // Implement your form submission logic here
  }

  //驗證邏輯
  validateForm(): boolean {

    if (!this.account || !this.validatorService.validateIdentity(this.account)) {
      this.errorCode='101';
      alert('帳號驗證失敗');
      return false;
    }

    if (!this.validatorService.validatePassword(this.password)) {
      this.errorCode
      alert('轉帳金額驗證失敗');
      return false;
    }


    // ... 其他验证 ...

    return true;
  }
}
