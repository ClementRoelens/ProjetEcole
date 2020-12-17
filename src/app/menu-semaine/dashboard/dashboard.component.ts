import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

@Input('week')week:number
@Output() WeekChange = new EventEmitter<any>()

  constructor() {
   }

  ngOnInit() {
    
  }
  nextWeek(){
    this.week +=1
    console.log( (this.week))
   this.WeekChange.emit(this.week)
  }
}
