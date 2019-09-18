import {
  Directive,
  Input,
  OnChanges,
  ElementRef,
  SimpleChanges,
  OnInit,
  HostListener
} from '@angular/core';
import * as Ladda from 'ladda';

@Directive({
  selector: '[appAppSubmit]'
})
export class AppSubmitDirective implements OnChanges, OnInit {
  private el: HTMLButtonElement;
  private ladda: Ladda.LaddaButton;
  @Input('ladda') loading: boolean;
  // private ladda: any = document.querySelector('#yourButton');

  constructor(private element: ElementRef) {
    this.el = this.element.nativeElement;
  }

  ngOnInit(): void {
    Ladda.bind(this.el, {
      callback: (ladda) => this.ladda = ladda
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.submitEffect(this.loading)
    console.log('test');
  }

  submitEffect(hidden) {
    if(hidden === false) {
      this.ladda.start();
    }else {
      this.ladda.stop();
    }

  }
}
