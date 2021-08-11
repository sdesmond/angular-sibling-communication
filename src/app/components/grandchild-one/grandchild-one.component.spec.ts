import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GrandchildOneComponent} from './grandchild-one.component';

describe('GrandchildOneComponent', () => {
  let component: GrandchildOneComponent;
  let fixture: ComponentFixture<GrandchildOneComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [GrandchildOneComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
