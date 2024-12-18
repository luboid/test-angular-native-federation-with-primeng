import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@demo/auth';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('userName', this.auth.userName);
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}
