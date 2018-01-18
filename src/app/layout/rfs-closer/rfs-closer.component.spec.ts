import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsCloserComponent } from './rfs-closer.component';

describe('RfsCloserComponent', () => {
  let component: RfsCloserComponent;
  let fixture: ComponentFixture<RfsCloserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfsCloserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfsCloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
