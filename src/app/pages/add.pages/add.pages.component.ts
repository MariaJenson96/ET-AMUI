import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // for native date adapter
import { MatIconModule } from '@angular/material/icon'; // (optional for icons if needed)
import { MatCardModule } from '@angular/material/card'; // (optional for card layout)

@Component({
  selector: 'app-add',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './add.pages.component.html',
  styleUrl: './add.pages.component.scss'
})
export class AddPagesComponent {
  transactionForm: FormGroup;
  selectedFile: File | null = null;

  categories = ['Food', 'Rent', 'Salary', 'Entertainment', 'Bills'];
  paymentMethods = ['Cash', 'Credit Card', 'Bank Transfer'];

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      type: ['', Validators.required],
      date: [new Date(), Validators.required],
      category: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log('Transaction Data:', this.transactionForm.value);
      // You can now send this to your backend
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.transactionForm.patchValue({ receipt: this.selectedFile });
    }
  }
}
