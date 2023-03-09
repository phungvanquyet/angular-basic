import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('value') valueElement: ElementRef;
  value = 5;
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];

  onChangeValue(number: Event) {
    console.log(number);
    this.value = Number(number.target['value']);
  }

}
