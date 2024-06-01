import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  // standalone: true,
  // imports: [
  //   ReactiveFormsModule,
  //   // ... any other modules the component uses ...
  // ],
})
export class SearchFormComponent {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
     // work_year: [{value: '', disabled: true}],
      work_year: [''],
      work_ym: [''],
      dept_no: ['22101', [Validators.required]],
      proj_pm: ['']
    });

    // If you have initial values, you can set them using the `setValue` or `patchValue` methods
    // this.searchForm.patchValue({work_year: 'some initial value', ...});
  }

  // Method to handle form submission
  onSubmit(): void {
    console.log(this.searchForm.value);
    // Perform the search operation based on the form values
  }
}
