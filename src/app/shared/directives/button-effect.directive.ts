import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MyServiceService } from '../../core/services/my-service.service';

@Directive({
  selector: '[appButtonEffect]',
  standalone: true
})
export class ButtonEffectDirective {

  constructor(private buttonEl: ElementRef, private myService: MyServiceService, private rend2: Renderer2) { }
  //swal effect and
  @HostListener('click') onClick() {

  }
}
