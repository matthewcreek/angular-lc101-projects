import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   jokeHeading: string = 'Joke Buttons'
   inactive: boolean = false;
   goldButton: boolean = false;
   silverButton: boolean = false;
   copperButton: boolean = false;
   jokeButton: boolean = false;

   constructor() { }

   ngOnInit() { }

   reactivate():void {
      if (this.goldButton){
         this.goldButton = false;
      }
      if (this.silverButton){
         this.silverButton = false;
      }
      if (this.copperButton){
         this.copperButton = false;
      }
   }
}
