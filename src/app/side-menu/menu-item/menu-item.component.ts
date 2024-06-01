import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
// 1. 引入MenuService

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit{

  receivedData: any;
  private dataSubscription!: Subscription;

  @Input()
  currentApp!: String;

  selected = "QRpay";
  currentPath = '';
  connectStatus = false;

  // 2. 聲明menus變數 承接service打過來的變數再餵給前端
  menus!: any[];

  // 3. 服務注入
  constructor(private router: Router, private menuService: MenuService) {

  }

  ngOnInit(): void {

    this.menus = this.menuService.menus;

    console.log(this.menus);
    //每次改變網址擷取第一個namespace參數 //不同的網址有不同的選單
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const Path = event.url;
        this.currentPath = Path;
        let urlArray = Path.split('/')
        this.currentApp = urlArray[1];

        if(Path == '/' || Path == '/setting' || Path == '/account' || Path == '/message' || Path == '/about'){
          this.menus = this.menuService.menus;
        }else if( this.currentApp == 'qrpay'){
          this.menus = this.menuService.menus;
        }else if( this.currentApp == 'framework'){
          this.menus = this.menuService.menus;
        }else if( this.currentApp == 'mesh'){
          this.menus = this.menuService.menus;
        }else{
          this.menus = this.menuService.menus;
        }
      }
    });
  }

  areJSONObjectsEqual(obj1: any, obj2: any): boolean {
    const string1 = JSON.stringify(obj1);
    const string2 = JSON.stringify(obj2);
    return string1 === string2;
  }

  //組件一渲染完成將service的menus變數配對給組件menus
  //讓組件更新前端資料

  //重組Payload 依照URI處理 route與link 屬性
  // processPayload(payload: any[]){
  //   if (payload.length) {
  //     for (const item of payload) {
  //       if (item.uri.startsWith('ngrouter:')) {
  //         item['route'] = this.transformUriFormat(item.uri);
  //       }
  //       if (item.uri.startsWith('https:')) {
  //         item['link'] = this.transformUriFormat(item.uri);
  //       }
  //       if (item.item && item.item.length) {
  //         this.processPayload(item.item);
  //       }
  //     }
  //   }
  // }

  //處理URI, ngrouter開頭的是Angular用來路由用的
  // transformUriFormat(uri: string): string {
  //   if (uri.startsWith('ngrouter:')) {
  //     return uri.substring(9);
  //   } if(uri.startsWith('https:')){
  //     return uri;
  //   } else {
  //     return '';
  //   }
  // }

} //end class



