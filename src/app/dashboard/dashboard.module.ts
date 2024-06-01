import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
// 1. 引入路由模組與home模組


@NgModule({
  declarations: [   // 2. 組件放在聲明陣列
    HomeComponent
  ],
  imports: [   // 3. 路由模組放在imports陣列
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
