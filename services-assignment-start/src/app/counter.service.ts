import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Inactive counter:' + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Active counter:' + this.inactiveToActiveCounter);
  }
}
