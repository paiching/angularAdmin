//模組
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Materials
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DndDirective } from './directives/dnd.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule} from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

// 組件
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuItemComponent } from './side-menu/menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalSettingComponent } from './pages/personal-setting/personal-setting.component';
import { SettingComponent } from './pages/setting/setting.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { VersionComponent } from './components/version/version.component';
import { TranslocoRootModule } from './transloco-root.module';

//服務
import { TranslocoService } from '@ngneat/transloco';
import { TranslatedMatPaginatorIntlService } from './services/translated-mat-paginator-intl.service';
import { ConfigService } from './services/config.service';
import { ButtonComponent } from './components/button/button.component';
import { ButtonFixedComponent } from './components/button-fixed/button-fixed.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ExportComponent } from './pages/export/export.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { ReportTabsComponent } from './components/report-tabs/report-tabs.component';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    MenuItemComponent,
    DndDirective,
    FooterComponent,
    PersonalSettingComponent,
    SettingComponent,
    AccountComponent,
    AboutComponent,
    VersionComponent,
    ButtonComponent,
    ButtonFixedComponent,
    TransferComponent,
    RegisterComponent,
    LoginComponent,
    ReactiveFormComponent,
    ExportComponent,
    SearchFormComponent,
    MegaMenuComponent,
    DemoPageComponent,
    DataTableComponent,
    ReportTableComponent,
    ReportTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatSliderModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDialogModule,
    CommonModule,
    MatBadgeModule,
    FontAwesomeModule,
    MatPaginatorModule,
    TranslocoRootModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.loadConfig(), //讀取環境設定用
      deps: [ConfigService],
      multi: true
    },
    { provide: MatPaginatorIntl, useClass: TranslatedMatPaginatorIntlService, deps: [TranslocoService] } //國際化i18N
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
