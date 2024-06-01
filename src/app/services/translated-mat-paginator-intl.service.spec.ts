import { TestBed } from '@angular/core/testing';

import { TranslatedMatPaginatorIntlService } from './translated-mat-paginator-intl.service';

describe('TranslatedMatPaginatorIntlService', () => {
  let service: TranslatedMatPaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatedMatPaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
