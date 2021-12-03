import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpListitemComponent } from './ip-listitem.component';

describe('IpListitemComponent', () => {
  let component: IpListitemComponent;
  let fixture: ComponentFixture<IpListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpListitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
