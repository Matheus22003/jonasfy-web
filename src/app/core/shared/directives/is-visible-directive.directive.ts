import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit, OnDestroy {

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    // Configuração do Intersection Observer
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    // Função de callback para o Intersection Observer
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.right > window.innerWidth) {
          this.el.nativeElement.style.display = 'none';
          this.observer?.unobserve(this.el.nativeElement);
        } else {
          this.el.nativeElement.style.display = 'block';
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    };

    this.observer = new IntersectionObserver(callback, config);
    this.observer.observe(this.el.nativeElement);
    window.addEventListener('resize', this.handleResize.bind(this));

  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.addEventListener('resize', this.handleResize.bind(this));

  }

  private handleResize() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.left < window.innerWidth) {
      this.el.nativeElement.style.display = '';
      this.observer?.observe(this.el.nativeElement);  // Re-observe o elemento
    }
  }


}
