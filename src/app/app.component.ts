import { Component, Output } from '@angular/core';

@Component({
    selector:'./app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title ='application';

   @Output() loadedFeature ;

   onNavigate(feature : string){
    console.log(feature);
       this.loadedFeature= feature;
   }
}