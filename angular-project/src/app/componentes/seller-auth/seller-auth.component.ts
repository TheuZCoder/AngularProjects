import { Component,OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private seller:SellerService,){}
  
  showLogin = false;
  authError:String = '';

  ngOnInit():void{
    this.seller.reloadSeller();
  }
  
  signUp(data:SignUp):void{
    this.seller.userSignUp(data);
  }
  
  login(data:SignUp):void{
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError))=>{
      if (isError) {
        this.authError="EMAIL OU SENHA INVALIDOS"
      }
    }
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }
}
