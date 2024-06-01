import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}


  loadConfig(): Promise<any> {

    //抓取專案設定檔配置
    // const obs$ = this.http.get("assets/config-prod.json");
    const obs$ = this.http.get(environment.config);

    return firstValueFrom(obs$)
        .then(config => {
            this.config = config;
            return config;
        });
}

  get(key: string) {
    return this.config[key];
  }

  getWebSocketUrl(): string {
    const hostname = window.location.hostname;
    const socketPort = this.get('socketPort');
    return `ws://${hostname}:${socketPort}/ws`;
  }
}
