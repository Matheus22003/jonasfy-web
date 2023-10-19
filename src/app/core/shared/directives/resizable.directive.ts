import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective implements AfterViewInit {

  private isResizing: boolean = false;
  private minWidth: number = 250; // Largura mínima em pixels
  private maxWidth: number = 500; // Largura máxima em pixels

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const resizeHandle = this.renderer.createElement('div');
    this.renderer.addClass(resizeHandle, 'resize-handle');
    this.renderer.appendChild(this.el.nativeElement, resizeHandle);

    this.renderer.listen(resizeHandle, 'mousedown', (event) => {
      this.isResizing = true;
      this.renderer.addClass(resizeHandle, 'resizing');
      document.addEventListener('mousemove', this.resizeSidebar);
      document.addEventListener('mouseup', () => {
        this.isResizing = false;
        this.renderer.removeClass(resizeHandle, 'resizing');
        document.removeEventListener('mousemove', this.resizeSidebar);
        window.dispatchEvent(new Event('sidebarResized'));
      });
    });
  }

  resizeSidebar = (event: { clientX: any; }) => {
    if (this.isResizing) {
      let newWidth = event.clientX;
      if (newWidth < this.minWidth) {
        newWidth = this.minWidth;
      } else if (newWidth > this.maxWidth) {
        newWidth = this.maxWidth;
      }

      document.documentElement.style.setProperty('--sidenav-width', `${newWidth}px`);
      // this.renderer.setStyle(this.el.nativeElement, 'width', `${event.clientX}px`);
    }
  }

}
