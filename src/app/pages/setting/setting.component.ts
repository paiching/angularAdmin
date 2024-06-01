import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';
import { TranslocoService } from '@ngneat/transloco';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {

  selectedLang: string = 'zh';
  selectedLevel = 'normal';

  constructor(private cdRef: ChangeDetectorRef, private SettingService: SettingService, private translocoService: TranslocoService) {
    console.log("ac:"+this.translocoService.getActiveLang());
  }


  ngOnInit() {
    this.selectedLang = localStorage.getItem('selectedLang') || 'zh';
  }

  onSelectionChange(level: string) {
  }

  changeLanguage(lang: string) {
    console.log("Changing language to:", lang);
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('selectedLang', lang);
    console.log("ac:"+this.translocoService.getActiveLang());
    this.cdRef.detectChanges();
  }

}
