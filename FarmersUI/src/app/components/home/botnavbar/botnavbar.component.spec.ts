import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnavbarComponent } from './botnavbar.component';

describe('BotnavbarComponent', () => {
  let component: BotnavbarComponent;
  let fixture: ComponentFixture<BotnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
