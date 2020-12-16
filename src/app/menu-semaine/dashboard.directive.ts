import {  AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[dashboard]'
})
export class DashboardDirective implements OnInit, AfterViewInit {


  // @Input('dashboard')el
  @Input('dashboard')i
  @ViewChild('el')el
  constructor(private renderer:Renderer2, private element:ElementRef) { }
  
  ngAfterViewInit(): void {
    // console.log(this.el.nativeElement)
    this.updateDashboard(this.i)

  }
  ngOnInit(): void {
  }

  updateDashboard(i){
    console.log(i)
    // console.log(this.el.nativeElement)
    
    if(i==0){
      // const buttona = this.renderer.createElement('button')
      // this.renderer.setStyle(element[0].nativeElement,'width','200px')
      // this.renderer.appendChild(element[0].nativeElement,buttona)
      // this.renderer.createText('cacacacacacacaca')
      // console.log("coucou: ",this.i.nativeElement)
    }
    // [el,i]=element
    // console.log(el)
  }

}
