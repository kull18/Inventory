import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonEffect]',
  standalone: true
})
export class ButtonEffectDirective {

  constructor(private buttonEl: ElementRef, private buttonLis: HostListener) { }

  @HostListener('mouselistener') onMouseEnter() {
    
  } 

}
