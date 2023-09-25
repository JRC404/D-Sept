import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  })

  it('should initialise the diceImage to null at the start', () => {
    expect(component.diceImage).toBeNull();
  })

  it('should set diceImage when rollDice is called', () => {
    component.rollDice(); // mimicking the call of the method
    expect(component.diceImage).not.toBeNull();
  })

  it('should set diceImage to dice-1/2/3/4/5/6.png depending on the value of the roll', () => {
    const numberRolled = component.rollDice();

    expect(component.diceImage).toBe(`assets/dice-${numberRolled}.png`);
  })

  it('should return a number between 1 and 6 when rollDice is called', () => {
    const numberRolled = component.rollDice();

    expect(numberRolled).toBeGreaterThanOrEqual(1);
    expect(numberRolled).toBeLessThanOrEqual(6);
  })

  it('should set diceImage to 1 when rollDice is called', () => {
    spyOn(Math, 'random').and.returnValue(0); // this test will always return 0 for Math.random
    component.rollDice();
    expect(component.diceImage).toBe('assets/dice-1.png');
  })

});
