import { PasswordShowDirective } from './password-show.directive';
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ng-password-show-hide';
  // @ViewChild(PasswordShowDirective , {static: true}) myPasswordDir:ElementRef;
  
  //  onClickMe() {
  //   if(this.myPasswordDir.nativeElement.getAttribute('type') === 'text') {
  //     this.myPasswordDir.nativeElement.type= 'password';
  //   }else {
  //     this.myPasswordDir.nativeElement.type = 'text';
  //   }   
  // }
  isPassword = true;
  show() {
    this.isPassword = !(this.isPassword);
  }

}
