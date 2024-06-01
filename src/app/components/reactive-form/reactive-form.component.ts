import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorLoggingService } from 'src/app/services/error-logging.service';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})


export class ReactiveFormComponent {

  reactiveForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService, //驗證服務
    private errorLoggingService: ErrorLoggingService // 錯誤日誌服務
  ) {}

  ngOnInit() {

    this.reactiveForm = this.formBuilder.group({

      idNumber: ['', [Validators.required, this.validationService.isValidTaiwanId()]],
      guiNumber: ['', [Validators.required, this.validationService.isValidGuiNumber()]],
      userName: ['', [Validators.required, this.validationService.isValidUserName()]],
      password: ['', [Validators.required, this.validationService.isValidPassword()]],
      bankAccount: ['', [Validators.required, this.validationService.isValidBankAccount()]],
      contact: ['', [Validators.required, this.validationService.isValidContact()]],
      email: ['', [Validators.required, this.validationService.isValidEmail()]],
      mobile: ['', [Validators.required, this.validationService.isValidMobile()]],
      amount: [null, [Validators.required, this.validationService.isValidAmount()]],
      date: ['', [Validators.required, this.validationService.isValidDate()]],
      note: ['', this.validationService.isValidNote()],
      verificationCode: ['', Validators.required],

    });
    console.log(this.reactiveForm);
  }

  onSubmit() {

    this.formSubmitted = true;

    if (this.reactiveForm.valid) {
      console.log('Form validation passed', this.reactiveForm.value);
      // Proceed with form submission logic
    } else {
      console.log('Form validation failed');

      Object.keys(this.reactiveForm.controls).forEach(key => {
        const control = this.reactiveForm.get(key) as FormControl; // Type assertion here
        if (control && control.errors) {
          console.log('Validation errors for ' + key + ': ', control.errors);
          this.errorLoggingService.logValidationErrors(control, key);
        }
      });
    }
  }


  // ...其他方法...

}
