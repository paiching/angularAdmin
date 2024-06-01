import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  private currentMenuSubject = new BehaviorSubject<any>(null);

  setCurrentMenu(menuItem: any) {
    this.currentMenuSubject.next(menuItem);
  }

  getCurrentMenu(): Observable<any> {
    return this.currentMenuSubject.asObservable();
  }

  menu: any[] = [
        {
          "index": 1,
          "title": "service",
          "item": [
            { "index": 11, "title": "service list" },
            { "index": 12, "title": "service config" }
          ]
        },
        {
          "index": 2,
          "title": "report",
          "item": [
            { "index": 21, "title": "report2" },
            {
              "index": 22,
              "title": "report3",
              "item": [
                { "index": 221, "title": "report3-1" ,"item": [{ "index": 2211, "title": "report3-1-1" },{ "index": 2212, "title": "report3-1-2" }]}
              ]
            }
          ]
        },
        {
          "index": 3,
          "title": "config"
        },
        {
          "index": 4,
          "title": "advanced",
          "item": [
            { "index": 41, "title": "search" }
          ]
        }
  ] //menu
}
