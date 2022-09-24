import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  // aim = 'your perfect banking partner';
  aim2 = 'password';
  acnt = 'enter your account number';
  accNum = '';
  pass = '';
  userDetails: any = {
    1000: {
      acno: 1000,
      userName: 'jonas',
      password: 123,
      balance: 100000,
    },

    2000: {
      acno: 2000,
      userName: 'amal',
      password: 1234,
      balance: 100000,
    },

    3000: {
      acno: 3000,
      userName: 'rahul',
      password: 12345,
      balance: 100000,
    },

    4000: {
      acno: 4000,
      userName: 'amala',
      password: 12345,
      balance: 100000,
    },
  };
  constructor() {}

  ngOnInit(): void {}
  // alert('hello')
  // login(ac: any, ps: any) {
  //   // alert(`hello`);
  //   let acnum = this.accNum;
  //   let password = this.pass;
  //   let userDetails = this.userDetails;
  //   // let userPassword=userDetails.
  //   if (acnum in userDetails) {
  //     if (password == userDetails[acnum]['password']) {
  //       alert(`correct`);
  //     } else {
  //       alert(`incorrect password`);
  //     }
  //     // if (password === userDetails[a]) {
  //     // }
  //   } else {
  //     alert(`account number not exist`);
  //   }
  // }

  login(ac: any, ps: any) {
    // alert(`hello`);
    console.log(ac.value, ps.value);

    let acnum = ac.value;
    let password = ps.value;
    let userDetails = this.userDetails;
    // let userPassword=userDetails.
    if (acnum in userDetails) {
      if (password == userDetails[acnum]['password']) {
        alert(`correct`);
      } else {
        alert(`incorrect password`);
      }
      // if (password === userDetails[a]) {
      // }
    } else {
      alert(`account number not exist`);
    }
  }

  accChange(event: any) {
    this.accNum = event.target.value;
  }
  accPass(event: any) {
    console.log(event.target.value);

    this.pass = event.target.value;
  }
}
// alert('hello');
