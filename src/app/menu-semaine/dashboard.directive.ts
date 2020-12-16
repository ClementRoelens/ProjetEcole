import {  Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dashboard]'
})
export class DashboardDirective implements OnInit {


  // @Input('dashboard')el
  @Input('dashboard')i:number
  // @ViewChild('el')el
  constructor(private renderer:Renderer2, private el:ElementRef) { }
  
  ngOnInit(): void {
    this.updateDashboard(this.i)

  }

  updateDashboard(i:number){
   
    
    if(i===0){
      console.log(i)
      console.log(this.el.nativeElement)
  //     const button = this.renderer.createElement('input')
  //     this.renderer.setAttribute(button,'type','button')
  //     this.renderer.setAttribute(button,'value','button')
  //     const article = this.el.nativeElement.getElementByTagName("article")


  // this.renderer.appendChild(this.el.nativeElement, button)
  // this.renderer.removeChild(this.el.nativeElement.childNodes[0],this.el.nativeElement.childNodes[0].childNodes[0])
  // this.renderer.appendChild(this.el.nativeElement, text)
      // const buttona = this.renderer.createElement('button')
      // this.renderer..innerHTML= "caca"
      // this.renderer.setStyle(this.element.nativeElement,'width','600px!important')
      // this.renderer.appendChild(this.element.nativeElement,buttona)
      // this.renderer.createText('cacacacacacacaca')
      // console.log("coucou: ",this.i.nativeElement)
    }
    // [el,i]=element
    // console.log(el)
  }

}
