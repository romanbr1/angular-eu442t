import {Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector:'[appBackground]'
})
export class BackgroundDirective implements OnInit{
  constructor(private element: ElementRef, private renderer: Renderer2){}

@Input('appBackground') hoverColor: string ='green';
@Input() defaultColor: string ='purple';
@HostBinding('style.backgroundColor') background:string;


ngOnInit(){
 this.defaultColor=this.defaultColor;
  }
  
@HostListener('mouseenter') mouseEnter(){
  // this.background='red';
  this.background=this.hoverColor
}
@HostListener('mouseleave') mouseLeave(){
  this.background=this.defaultColor;
}
}
