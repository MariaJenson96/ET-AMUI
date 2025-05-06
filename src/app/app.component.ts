import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaInstallService } from './services/pwa-install.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private pwaInstallService: PwaInstallService, private notificationService: NotificationService) {}

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }

  ngOnInit(): void {
    this.notificationService.requestPermission();
  }

  notify() {
    this.notificationService.showNotification('HI 👋');
  }
}
