import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { AuthService , AuthResponseData } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl :'./auth.component.html'
    })

export class AuthComponent{

    constructor(private authservice:AuthService){}
    isLoginMode = true;
    isLoading = false;
    error :string = null;

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

      onSubmit(form :NgForm){
        if(!form.valid){
            return;
        }
        const email= form.value.email;
        const password = form.value.password;
        let authObs : Observable<AuthResponseData>;

        if(this.isLoginMode){
             authObs =this.authservice.login(email,password);
        }else{
            this.isLoading=true;
             authObs = this.authservice.signup(email,password);
            }

            authObs.subscribe(
                resData =>{
                    console.log(resData);
                    this.isLoading=false;
                }, 
                errorMessage =>{
                    console.log(errorMessage);
                    this.error = errorMessage;                                   
                    this.isLoading=false;
                }    
        );
        form.reset();
    }

}