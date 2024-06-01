import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})

export class TranslatedMatPaginatorIntlService extends MatPaginatorIntl {

  override itemsPerPageLabel = '';

  constructor(private translocoService: TranslocoService) {
    super();

    // Fetch and set the translation for itemsPerPageLabel
    this.translocoService.selectTranslate('itemsPerPage').subscribe(translation => {
      this.itemsPerPageLabel = translation;
    });

    // You can also set translations for other paginator labels similarly
    // For example: this.nextPageLabel = this.translocoService.translate('nextPage');
  }
}
