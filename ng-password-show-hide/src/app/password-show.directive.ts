import { Directive, HostListener, ElementRef, Renderer2, OnInit, ViewChild, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPasswordShow]'
})
export class PasswordShowDirective implements OnInit{
  @HostBinding('type') passwordType = 'password';
  
  // constructor(private renderer: Renderer2, private el: ElementRef) {}
  // ngOnInit(): void {
  //   this.renderer.setAttribute(this.el.nativeElement, 'type', 'password') ;
  // }

  // @HostListener('document:click', ['$event']) toggleShow(event: Event) {
  //   this.isOpen = this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
