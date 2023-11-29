// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isLoading = true; // Private variable to store the loading status

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

  private _isDark = this.getTheme();

  get darkMode(): boolean {
    return this._isDark;
  }

  toggleTheme(): void {
    this._isDark = !this._isDark;
    this.setTheme(this._isDark);
  }

  private getTheme(): boolean {
    const storedTheme = localStorage.getItem('dark');
    return storedTheme ? JSON.parse(storedTheme) : !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private setTheme(value: boolean): void {
    localStorage.setItem('dark', JSON.stringify(value));
  }
}
