import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { greet } from 'shared-utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  greetingMessage: string;

  constructor() {
    this.greetingMessage = greet('Welcome Mucahit');
  }
}
