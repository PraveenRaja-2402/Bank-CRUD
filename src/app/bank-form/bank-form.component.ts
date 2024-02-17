import { Component } from '@angular/core';

interface Branch {
  branchName: string;
  branchCode: string;
  ifscCode: string;
}


@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent {
  bankName!: string;
  address!: string;
  mainBranch!: string;
  datePicker!: Date;
  branchDetails: Branch[] = []; // Initialize branchDetails as an empty array

  constructor() { }

  addBranch() {
    this.branchDetails.push({ branchName: '', branchCode: '', ifscCode: '' });
  }

  save() {
    // Add logic to save the bank details
  }

  
deleteBranch(index: number) {
  // Logic to delete a branch from branchDetails array based on index
  if (index > -1) {
    this.branchDetails.splice(index, 1);
  }
}
}
