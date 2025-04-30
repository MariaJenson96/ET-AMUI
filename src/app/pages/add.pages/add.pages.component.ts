import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { Transaction } from '../../interface/transaction';
import { CommonService } from '../../services/common.service';

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
  arrayOfCategory: any = [];  

  constructor(private fb: FormBuilder, private c: CommonService) {
    this.transactionForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      type: ['', Validators.required],
      date: [new Date(), Validators.required],
      category: ['', Validators.required]
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
    if(val !== '[]' && val.length > 0)this.arrayOfTransaction = val
  }

  clearFields(){
    this.transactionForm.reset({
      title:[''],
      date: new Date(),
      amount: [''],
      type: [''],
      category: ['']
    });
  }

  onTypeChange(selectedValue: number) {
    this.arrayOfCategory = [];

    if (selectedValue == 1) {
      this.arrayOfCategory = this.c.getIncome();
    } else if (selectedValue == 2) {
      this.arrayOfCategory = this.c.getExpense();
    }
  }  
}
