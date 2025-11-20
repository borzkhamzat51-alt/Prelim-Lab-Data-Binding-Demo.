import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NECESSARY FOR [(ngModel)]

@Component({
  selector: 'app-data-binding-demo',
  
  // Since this is a Standalone component:
  standalone: true,
  imports: [FormsModule], // Includes the Forms module for Two-Way Binding
  
  templateUrl: './data-binding-demo.html',
  // Corrected path to match your file name (data-binding-demo.css)
  styleUrls: [ './data-binding-demo.css' ] 
})
export class DataBindingDemoComponent {
  
  // Text Interpolation
  title = "My First App";
  description = "This is my new Angular application";

  // Property Binding
  imageUrl = '../assets/logo-angular.png';
  width = 50;
  height = 50;
  altText = 'Angular Logo';

  // Style Binding
  textColor = 'blue';

  // Class Binding
  isHighlighted = true;

  // Two-Way Data Binding
  yourName = '';

  // Event Binding
  count: number = 0; // Added explicit 'number' type

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}