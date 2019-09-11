import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-assignment-third',
  templateUrl: './test-assignment-third.component.html',
  styleUrls: ['./test-assignment-third.component.css']
})
export class TestAssignmentThirdComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onShowSecret() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
