import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsUpdaterComponent } from './rfs-updater.component';

describe('RfsUpdaterComponent', () => {
  let component: RfsUpdaterComponent;
  let fixture: ComponentFixture<RfsUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
