import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonasfyMusicCardComponent } from './jonasfy-music-card.component';

describe('JonasfyMusicCardComponent', () => {
  let component: JonasfyMusicCardComponent;
  let fixture: ComponentFixture<JonasfyMusicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonasfyMusicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonasfyMusicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
