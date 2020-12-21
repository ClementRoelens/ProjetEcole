import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-week-count',
  templateUrl: './week-count.component.html',
  styleUrls: ['./week-count.component.scss'],
})
export class WeekCountComponent implements OnInit {

  @Output()eventDecrement = new EventEmitter()
  @Output()eventIncrement = new EventEmitter()
  @Input('week')week:number

  constructor() { }

  ngOnInit() {}

  decrement(){
    let week = this.week-1
    if(week<1) week=52
    this.eventDecrement.emit(week)
  }
  increment(){
    let week = this.week+1
    if(week>52) week=1
    this.eventIncrement.emit(week)
  }
}
