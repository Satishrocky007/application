import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root'})
export class LoggingService{

    lastLog  :string;

    printLog(messaage:string){
        console.log(messaage);
        console.log(this.lastLog);
        this.lastLog=messaage;
    }
}