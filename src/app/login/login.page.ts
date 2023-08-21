import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UiService } from '../core/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers:[UserService]
})
export class LoginPage implements OnInit {

  LoginForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private user:UserService, private uiService:UiService) { 
    this.LoginForm = fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    });
  }

  ngOnInit() {
    // this.user.getAllUsers().subscribe()
  }

  formSubmit(){
    if(!this.LoginForm.invalid){
      this.user.login(this.LoginForm.value).subscribe({
        next:()=>{
          this.router.navigate(['tabs/tab1'])
          this.uiService.showMessage({message:'Login Successfull',color:"success"});
        },
        error:()=>{
          this.uiService.showMessage({message:'Invalid credential',color:"danger"});
        }
      })
    }
  }

  get f() {
    return this.LoginForm 
  }
}
