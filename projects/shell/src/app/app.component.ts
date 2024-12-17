import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@demo/auth';

import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    ButtonModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
  auth = inject(AuthService);

  constructor() {
    this.auth.userName = 'Jane Doe';
  }
}

