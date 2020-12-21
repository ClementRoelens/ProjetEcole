import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

@Input('week')week:number
@Output() WeekChange = new EventEmitter()

  constructor() {
   }

  ngOnInit() {
    
  }
  // sayCoucou(e){
  //   console.log(e)
  // }
  nextWeek(e:number){
  // let incrementWeek =  this.week +=1
    console.log("suis-je un nombre: ", e)
    this.week=e
   this.WeekChange.emit(e)
  }
}
