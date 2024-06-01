import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './pages/setting/setting.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ExportComponent } from './pages/export/export.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';

const routes: Routes = [
  //{ path: '', component: TransferComponent},
  { path: 'account', component: AccountComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'about', component: AboutComponent},
  { path: 'transfer', component: TransferComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'export', component: ExportComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'megamenu', component: MegaMenuComponent},
  { path: 'tabs', component: TabsComponent},
  { path: '', component: DemoPageComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }, // 設定dashboard模組路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
