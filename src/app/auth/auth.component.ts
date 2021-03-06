import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnDestroy {

    constructor(private authservice: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver) { }
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    private closeSub: Subscription;

    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    ngOnDestroy(){
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            this.isLoading = true;
            authObs = this.authservice.login(email, password);
        } else {
            this.isLoading = true;
            authObs = this.authservice.signup(email, password);
        }

        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
            }
        );
        form.reset();
    }
    onHandleError() {
        this.error = null;
    }

        private showErrorAlert(message: string) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });


    }

}