import { Component, OnInit } from '@angular/core';
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
import { Transaction } from '../../interface/transaction';

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
export class AddPagesComponent implements OnInit {
  transactionForm: FormGroup;
  selectedFile: File | null = null;
  arrayOfTransaction: Transaction[] = [];
  arrayOfCategory = [
    { id: 1, value: "Salary"},
    { id: 2, value: "Freelance"},
    { id: 3, value: "Business"},
    { id: 4, value: "Rental"},
    { id: 5, value: "Investment"},
    { id: 6, value: "Bonuses"},
    { id: 7, value: "Pension"},
    { id: 8, value: "Government"},
    { id: 9, value: "Gifts"},
    { id: 10, value: "Refunds"},
    { id: 11, value: "Royalties"},
    { id: 12, value: "Other Income"},
    { id: 1, value: "Housing"},
    { id: 2, value: "Transportation"},
    { id: 3, value: "Living"},
    { id: 4, value: "Health"},
    { id: 5, value: "Education"},
    { id: 6, value: "Financial"},
    { id: 7, value: "Entertainment"},
    { id: 8, value: "Others"}
  ];  
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
      this.arrayOfTransaction.push(this.transactionForm.value)
        let formValue = JSON.stringify(this.arrayOfTransaction);        
        localStorage.setItem("TransactionDetails",formValue);
        this.clearFields();        
    }
  }

  ngOnInit(){
    this.clearFields();
    let val = JSON.parse(localStorage.getItem("TransactionDetails") || '[]')
    if(val !== '[]' && val.length > 0)this.arrayOfTransaction.push(val);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.transactionForm.patchValue({ receipt: this.selectedFile });
    }
  }

  clearFields(){
    Object.keys(this.transactionForm.controls).forEach(key => {
      this.transactionForm.get(key)?.reset();
    });
  }
}
