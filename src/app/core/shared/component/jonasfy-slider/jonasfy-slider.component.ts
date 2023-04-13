import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'jonasfy-slider',
  templateUrl: './jonasfy-slider.component.html',
  styleUrls: ['./jonasfy-slider.component.scss']
})
export class JonasfySliderComponent implements OnInit {
  @Input()
  public min!: number;

  @Input()
  public max!: number;

  @Input()
  public valueMusicSlider!: number;

  @Output()
  public valueMusicSliderChange = new EventEmitter<number>();

  @Input()
  public idSlider!: string;

  @Input()
  public onChange!: Function;

  public idSliderComplete!: string;

  public colorVariable!: string;

  public colorVariableHover!: string;

  public ngOnInit(): void {
    this.setCustomVariables();
    this.setStyleSlider();
    this.musicRangeChange();
  }

  private setStyleSlider() {
    const style = document.createElement('style');
    style.innerHTML = `#${this.idSliderComplete} { background: var(${this.colorVariable}); } #${this.idSliderComplete}:hover{background: var(${this.colorVariableHover});}`;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  private setCustomVariables() {
    this.idSliderComplete = `music-slider-${this.idSlider}`
    this.colorVariable = `--slider-${this.idSliderComplete}-color`;
    this.colorVariableHover = `--slider-${this.idSliderComplete}-color-hover`;
  }

  public musicRangeChange(): void {
    this.valueMusicSliderChange.emit(this.valueMusicSlider);
    const percentage = (this.valueMusicSlider - this.min) / (this.max - this.min) * 100;
    document.documentElement.style.setProperty(this.colorVariable, `linear-gradient(to right, #FFFFFF, #FFFFFF ${percentage}%, #5E5E5E ${percentage}%, #5E5E5E 100%)`);
    document.documentElement.style.setProperty(this.colorVariableHover, `linear-gradient(to right, #22C95C, #22C95C ${percentage}%, #5E5E5E ${percentage}%, #5E5E5E 100%)`);
  }
}
