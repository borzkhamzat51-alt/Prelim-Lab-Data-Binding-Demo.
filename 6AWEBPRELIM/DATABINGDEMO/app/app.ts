import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import your DataBinding Demo Component
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo'; // Corrected path/filename

@Component({
  selector: 'app-root',
  // Your root component must be standalone
  standalone: true, 
  // Add your component to the imports array so it can be used in app.html
  imports: [RouterOutlet, DataBindingDemoComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab_data_binding');
}