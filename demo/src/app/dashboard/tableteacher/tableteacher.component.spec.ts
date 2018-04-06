import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableteacherComponent } from './tableteacher.component';

describe('TableteacherComponent', () => {
  let component: TableteacherComponent;
  let fixture: ComponentFixture<TableteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
