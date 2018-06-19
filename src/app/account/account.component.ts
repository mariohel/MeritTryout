import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';
import { UserService } from '../common/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  balance: number = 0;
  transactions: any[] = [];
  transferForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;
  constructor(private userService: UserService, private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAccountInfo();
    this.transferForm = this.formBuilder.group({
      account: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  getAccountInfo(){
    this.getBalance();
    this.getTransactions();
  }

  getBalance(){
    //let that = this;
    this.accountService.getBalance(this.userService.currentUser.username).subscribe((data: any)=>{
      this.balance = data.balance || 0;
    })
  }
  getTransactions(){
    this.accountService.getTransactions(this.userService.currentUser.username).subscribe((data: any[])=>{
      this.transactions = data || [];
    })
  }

  get formData() { return this.transferForm.controls; }

  onSubmit() {
    this.errorMessage = null;
    // stop here if form is invalid
    if (this.transferForm.invalid) {
        return;
    }

    this.loading = true;
    this.submitted = true;
    let data = {
      from: this.userService.currentUser.username,
      to: this.formData.account.value,
      amount: +this.formData.amount.value || 0
    }
    this.accountService.transfer(data)
    .subscribe((data: any) => {        
          this.loading = false;
          this.getAccountInfo();               
      },
      error => {
        this.errorMessage = error.message;
        this.loading = false;
        console.error(error);       
      });
  }

}
