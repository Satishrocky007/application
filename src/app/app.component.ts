import { Component, Output, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './loging.service';

@Component({
    selector: './app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'application';
    constructor(private authService: AuthService, private loggingService: LoggingService) { }

    //    @Output() loadedFeature ;

    //    onNavigate(feature : string){
    //     console.log(feature);
    //        this.loadedFeature= feature;
    //    }

    ngOnInit() {
        this.authService.autoLogin();
        this.loggingService.printLog('hello from App-Component ng-Oninit');
    }
}