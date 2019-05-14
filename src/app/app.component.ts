import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Election Mascot';
  show:boolean=false;
  show_2:boolean=false;
  show_3:boolean=false;
  feedback:boolean=false;
  mascot_name:string;
  constructor(){
    this.show=true;
  }
   movetosecond(){
     this.show=false;
     this.show_2=true;
   }
   movetothird(){
    this.show_2=false;
    this.show_3=true;
  }
  openFeedback(name:string){
    this.feedback=true;
    console.log("feedback");
    this.mascot_name=name;
  }
}
