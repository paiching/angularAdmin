import { MenuService } from 'src/app/services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})


export class MegaMenuComponent implements OnInit{

  menu: any[] = []; //接全選單
  megamenu: any[] = []; //擷取第三層選單

  constructor(private MenuService:MenuService){
    this.menu=MenuService.menus;
  }

  ngOnInit() {
    //取選單第三層
    this.megamenu = this.extractNestedMenuItems(this.menu, 3);
    console.log("menu3"+JSON.stringify(this.megamenu));
  }

  //用來擷取階層選單
  extractNestedMenuItems(menu: any[], level: number): any[] {
    let result: any[] = [];

    function traverse(items: any[], currentLevel: number) {
      if (!items) {
        return;
      }

      if (currentLevel === level) {
        result.push(...items);
      } else {
        items.forEach(item => {
          traverse(item.item, currentLevel + 1);
        });
      }
    }

    traverse(menu, 1);
    return result;
  }

}
