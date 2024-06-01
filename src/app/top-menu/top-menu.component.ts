import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../services/drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit{

  receivedData: any;
  private dataSubscription!: Subscription;
  newNotificationsCount: number = 0;

  showNotification() {
    //this.newNotificationsCount = 0;
  }

  // 2. 注入DrawerService服務
  //constructor(private drawerService: DrawerService, private NoticeService: NoticeService) {}
  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
  }

  resetMsg(){
  }

  // 3. 呼叫開啟側邊欄
  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }

}
