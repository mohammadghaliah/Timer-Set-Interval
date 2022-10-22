import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number = 30;
  resendEmailEnabled: boolean = true;

  goToResetPassword() {
    this.resendEmailEnabled = false;
    this.resendEmailTimer();
  }

  resendEmailTimer() {
    this.counter = 30;
    var interval = setInterval(() => {
      this.counter--;
      if (this.counter <= 0) {
        this.resendEmailEnabled = true;
        clearInterval(interval);
      }
    }, 1000);
  }
}
