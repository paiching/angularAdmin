import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private levelSubject = new BehaviorSubject<string>(this.getInitialLevel());

  level$ = this.levelSubject.asObservable();

  constructor() { }

  private getInitialLevel(): string {
    return localStorage.getItem('noticeLevel') || 'Info'; // Default value
  }

  setLevel(level: string) {
    this.levelSubject.next(level);
    localStorage.setItem('noticeLevel', level); // Save the setting
  }

}
