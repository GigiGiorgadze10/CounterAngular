import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  count: number = 0;

  addCount() {
    this.count++;
  }

  lowerCount() {
    this.count--;
  }

  getBackgroundColor() {
    if (this.count > 0) {
      return 'green-background';
    } else if (this.count < 0) {
      return 'red-background';
    } else {
      return 'gray-background';
    }
  }
}
