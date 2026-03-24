// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
    private isNightMode: boolean = false;

    toggleTheme(): void {
      this.isNightMode = !this.isNightMode;
      document.body.classList.toggle('night-mode', this.isNightMode);
    }
  
    getIsNightMode(): boolean {
      return this.isNightMode;
    }
  
    getThemeClass(): string {
      return this.isNightMode ? 'night-mode' : 'day-mode';
    }
}
