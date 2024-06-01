import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {


  constructor(private validatorService:ValidatorService) { }

  //Reactive Form 驗證用
  isValidContact(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateContact(control.value)) {
        return null;  // No error
      }
      return { 'invalidContact': true };
    };
  }

  isValidEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const identity = control.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(identity)) {
        return null;  // No error
      }

      // 這裡傳回的物件會跟ErrorMapping比對
      return { 'invalidEmail': true };
    };
  }

  isValidUserName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateUserName(control.value)) {
        return null;  // No error
      }
      return { 'invalidUserName': true };
    };
  }

  isValidPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validatePassword(control.value)) {
        return null;  // No error
      }
      return { 'invalidPassword': true };
    };
  }

  isValidAmount(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const amount = control.value;
      if (this.validatorService.validateAmount(amount)) {
        return null;  // No error
      }

      return { 'invalidAmount': true };
    };
  }

  isValidNote(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateNote(control.value)) {
        return null;  // No error
      }
      return { 'invalidNote': true };
    };
  }

  isValidTaiwanId(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateTaiwanId(control.value)) {
        return null;  // No error
      }
      return { 'invalidTaiwanId': true };
    };
  }

  isValidGuiNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateTaiwanBusinessId(control.value)) {
        return null;  // No error
      }
      return { 'invalidGuiNumber': true };
    };
  }

  isValidBankAccount(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateBankAccount(control.value)) {
        return null;  // No error
      }
      return { 'invalidBankAccount': true };
    };
  }

  isValidMobile(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateTaiwanMobilePhone(control.value)) {
        return null;  // No error
      }
      return { 'invalidMobile': true };
    };
  }

  isValidIntegerAmount(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateIntegerAmount(control.value)) {
        return null;  // No error
      }
      return { 'invalidIntegerAmount': true };
    };
  }

  isValidDateFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateDateFormat(control.value)) {
        return null;  // No error
      }
      return { 'invalidDateFormat': true };
    };
  }

  isValidDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateDate(control.value)) {
        return null;  // No error
      }
      return { 'invalidDate': true };
    };
  }

  isValidBirthDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateBirthDate(control.value)) {
        return null;  // No error
      }
      return { 'invalidBirthDate': true };
    };
  }

  isValidBankCode(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validatorService.validateBankCode(control.value)) {
        return null;  // No error
      }
      return { 'invalidBankCode': true };
    };
  }

  // ... 其他验证方法 ...
}
