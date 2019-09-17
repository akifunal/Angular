import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective implements OnInit{
  private _shown = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'password') ;
    const parent = this.el.nativeElement.parentNode;
    const button = document.createElement('button');
    button.className = 'password-toggle '
    button.innerHTML = `Show password`;
    button.addEventListener('click', () => {
      this.toggle(button);
    });
    parent.appendChild(button);
  }
  
  toggle(button: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown ) {
      this.el.nativeElement.setAttribute('type', 'text');
      button.innerHTML = 'Hide password';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      button.innerHTML = 'Show password';
    }
  }

}
