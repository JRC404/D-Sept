import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceImage: string | null = null;
  // diceImage!: string;

  rollDice() {
    const randomNumber: number = Math.floor(Math.random() * 6) + 1;
    this.diceImage = `assets/dice-${randomNumber}.png`;
    // if(randomNumber == 1) {
    //   this.diceImage = `assets/dice-six-faces-one.png`;
    // }
    return randomNumber;
  }
}
