import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
//引入Angular Material側邊欄元件

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  constructor() { }

  private drawer!: MatSidenav;
  // 聲明一個AngularMaterial Sidenav類型的drawer變數
  // 用來獲取<mat-drawer> #drawer標籤屬性
  // drawer 後面驚嘆號! 表示程式後面才會做初始化附值並非undefined


  public setDrawer(drawer: MatSidenav) {
    this.drawer = drawer;
  }
  // 此函式會在sideMenu元件渲染完, 獲取到標籤後呼叫
  // 主要把拿到的標籤屬性傳給drawer.service成員變數

  public toggleDrawer() {
    this.drawer.toggle();
  }
  // 此函式主要是讓top-menu組件的按鈕啟動側邊欄

  public open() {
    return this.drawer.open();
  }
  // 打開側邊欄

  public close() {
    return this.drawer.close();
  }
  // 關閉側邊欄
}
