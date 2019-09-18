import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective implements OnChanges{
  @Input() appPassword: boolean;

  constructor(private el: ElementRef) {
    // console.log('test');
    // if (this.appPassword === false ) {
    //   this.el.nativeElement.setAttribute('type', 'text');
    //   // button.innerHTML = 'Hide password';
    // } else {
    //   this.el.nativeElement.setAttribute('type', 'password');
    //   // button.innerHTML = 'Show password';
    // }
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.appPassword === false ) {
      this.el.nativeElement.setAttribute('type', 'text');
      // button.innerHTML = 'Hide password';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      // button.innerHTML = 'Show password';
    }
    
  }

  }
 

