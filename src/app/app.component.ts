import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaInstallService } from './services/pwa-install.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private pwaInstallService: PwaInstallService) {}

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }
}
