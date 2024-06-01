import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

// Declare interfaces outside of the class
interface ErrorDetail {
  code: number;
  message: string;
}

interface ErrorMapping {
  [key: string]: ErrorDetail;
}

@Injectable({
  providedIn: 'root'
})

export class ErrorLoggingService {

  // Define the error mapping with control names as keys
  private errorMapping: ErrorMapping = {
    required: { code: 100, message: 'Field is required' },
    invalidTaiwanId: { code: 101, message: 'Invalid Taiwan ID' },
    invalidUserName: { code: 102, message: 'Invalid username' },
    invalidPassword: { code: 103, message: 'Invalid password' },
    invalidAmount: { code: 104, message: 'Invalid amount' },
    invalidNote: { code: 105, message: 'Invalid note' },
    invalidIdentity: { code: 106, message: 'Invalid identity format' },
    invalidGuiNumber: { code: 107, message: 'Invalid GUI number' },
    invalidBankAccount: { code: 108, message: 'Invalid bank account number' },
    invalidMobile: { code: 109, message: 'Invalid mobile' },
    invalidIntegerAmount: { code: 110, message: 'Invalid integer amount' },
    invalidDateFormat: { code: 111, message: 'Invalid date format' },
    invalidDate: { code: 112, message: 'Invalid date' },
    invalidContact: { code: 115, message: 'Invalid contact' },
    invalidBirthDate: { code: 113, message: 'Invalid birth date' },
    invalidBankCode: { code: 306, message: 'Invalid bank code' },
    invalidEmail: { code: 307, message: 'Invalid Email' },
  };

  constructor() { }

  logValidationErrors(control: FormControl, controlName: string) {
    const errors = control.errors;
    if (errors) {
      Object.keys(errors).forEach(errorKey => {
        let errorDetail;
        if (errorKey === 'required') {
          // If the error is 'required', use a specific message with the field name
          errorDetail = { code: 100, message: `${controlName} is required` };
        } else {
          // For other errors, use the error mapping
          errorDetail = this.errorMapping[errorKey];
        }

        if (errorDetail) {
          console.log({ errorCode: errorDetail.code, message: errorDetail.message });
        } else {
          console.error(`Error mapping not found for error: ${errorKey}`);
        }
      });
    }
  }


}
