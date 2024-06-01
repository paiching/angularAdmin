import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private configService: ConfigService) {}

  /* 抓取環境設定 */
  // private kialiLink =  this.configService.get('kialiLink');
  // private grafanaLink =  this.configService.get('grafanaLink');

  // public getFixMenu(){
  //   return this.menus;
  // }

  public getMenus(){}

// 選單結構
/* 說明:
   menu的index用階層編號表示第一層為一個數字,第2層兩個數字 如”index”:11 為第二項第一個選單項目, “index”: 121表示有三層
   有子選單會用item:[]
   route用來做超連結對應註冊的模組路由使用
*/
  menus: any[] = [
    {
      "index": 1,
      "title": "服務",
      "route": "index",
      "item": [
        { "index": 11, "title": "service list" , "route":"service-list" },
        { "index": 12, "title": "service config" , "route":"service-config"}
      ]
    },
    {
      "index": 2,
      "title": "report",
      "route": "report-index",
      "item": [
        { "index": 21, "title": "report2","route": "report2-page" },
        {
          "index": 22,
          "title": "report3",
          "route": "report3-page",
          "item": [
            { "index": 221, "title": "report3-1" , "route": "report3-page","item": [{ "index": 2211, "title": "report3-1-1","route": "report2211-page", "item": [
              { "index": 41, "title": "search","route": "report-search-page",}
            ]},{ "index": 2212, "title": "report3-1-2", "route": "report312-page", }]}
          ]
        }
      ]
    },
    {
      "index": 3,
      "title": "config",
      "route": "config-page"
    },
    {
      "index": 4,
      "title": "advanced",
      "route": "advanced-page",
      "item": [
        { "index": 41, "title": "search","route": "advance-search-page", }
      ]
    }
  ];

  //含有登入訊息的結構
  login_menu: any[] = [
    {
      "company_no": "16313302",
      "user": "henrylai",
      "empl_no": "2211473",
      "role": "employee",
      "menu": [
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
      ]
    }
  ]

}
