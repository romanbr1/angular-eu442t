import {Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector:'[appBackground]'
})
export class BackgroundDirective implements OnInit{
  constructor(private element: ElementRef, private renderer: Renderer2){}

@HostBinding('style.backgroundColor') background:string;


ngOnInit(){
 
  }
  
@HostListener('mouseenter') mouseEnter(){
  this.background='red';
}
@HostListener('mouseleave') mouseLeave(){
  this.background='transparent';
}
}
