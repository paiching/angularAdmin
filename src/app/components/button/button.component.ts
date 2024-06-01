import { Component, Input, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button-1',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() word: string = '';
  @ViewChild('btn', { static: false })
  btn!: ElementRef;
  buttonWidth: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;

  private translationSubscription!: Subscription;
  private translated = false;

  constructor(
    private translocoService: TranslocoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.translationSubscription = this.translocoService.selectTranslate(this.word)
      .subscribe(() => {
        this.translated = true;
      });
  }

  ngAfterViewChecked(): void {
    if (this.translated) {
      this.translated = false;
      this.getWidth();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.getWidth();
  }

  ngOnDestroy(): void {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }

  getButtonStyle(word: string): any {
    const length = word.length;
    let fontSize = 12;
    let padding = 10;

    if (length > 3) {
      fontSize = 16;
      padding = 15;
    }
    if (length > 7) {
      fontSize = 16;
      padding = 17;
    }

    return {
      'font-size': `${fontSize}px`,
      'padding': `${padding}px`
    };
  }

  getWidth(): void {
    if (this.btn && this.btn.nativeElement) {
      this.buttonWidth = this.btn.nativeElement.offsetWidth;
      this.offsetX = this.btn.nativeElement.offsetLeft;
      this.offsetY = this.btn.nativeElement.offsetTop;
    }
  }

}
