import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawerService } from '../services/drawer.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';
import { NavigationEnd, Router} from '@angular/router';
import { MatSelect } from '@angular/material/select';
import { CommonService } from '../services/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  selected="applications";
  private subscription!: Subscription;

  param!: any;

  currentApp = 'qrpay';

  //需要取得Application列表生成應用程式下拉選單 與 各級的menu選單
  //每個頁面要獲取app參數去訪問API資料

  @ViewChild('drawer') public drawer!: MatSidenav;

  //ApplicationsComponent: any;
  // 獲取側邊欄屬性 sidenav 驚嘆號!代表以後會初始化 (不會報錯)
  // ngAfterViewInit() 渲染好元件後#drawer才抓到標籤值
  constructor(private route: ActivatedRoute, private router: Router, private drawerService: DrawerService,private commonService:CommonService) { //5 注入data服務

  }

  ngOnInit(): void {
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            const Path = event.url;
            let urlArray = Path.split('/')
            this.currentApp = urlArray[1];
            //導航的URL前墜
            console.log("路徑APP:"+urlArray[1]);
            this.selected = urlArray[1];
            this.commonService.setCurrentAPP(urlArray[1]);
          }
        });

  }

  //應用下拉切換APP
  changeApp(event: MatSelectChange): void {
    const selectedValue = event.value;
    let url = event.value;
    console.log(url);

    this.commonService.currentApp = event.value;
    //使用繞出去再繞回來
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate([url]);
    });

  }

  clearSelections(select: MatSelect): void {
    select.value = null; // Set the value to null
    select._onChange(null); // Trigger change event manually
  }

  ngAfterViewInit() { //渲染好元件後執行的動作
    //this.drawer.toggle(); //啟動toggle()打開側邊攔
    this.drawerService.setDrawer(this.drawer); //把標籤值傳給drawerService成員
   }

}
