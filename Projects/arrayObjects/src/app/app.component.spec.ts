import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection to render the template
  });

  it('should display arrayOfObjects in the HTML', () => {
    const itemElements = fixture.debugElement.queryAll(By.css('div p'));

    // Assert that the number of rendered items matches the length of arrayOfObjects
    expect(itemElements.length).toBe(component.arrayOfObjects.length);

    // Loop through each rendered item and assert its text content
    itemElements.forEach((itemElement, index) => {
      const item = component.arrayOfObjects[index];
      const itemText = itemElement.nativeElement.textContent;
      expect(itemText).toContain(item.Item);
      expect(itemText).toContain(item.Quantity.toString());
    });
  });
});
