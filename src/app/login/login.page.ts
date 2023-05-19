import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  LoginForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.LoginForm = fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }

  ngOnInit() {
  }

  formSubmit(){
    if(!this.LoginForm.invalid){
      console.log("value",this.LoginForm.value)
      this.router.navigateByUrl('/tabs/tab1')
    }
  }

  get f() {
    return this.LoginForm 
  }
}
