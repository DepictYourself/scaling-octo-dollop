import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemUserComponent } from './table-item-user.component';

describe('TableItemUserComponent', () => {
  let component: TableItemUserComponent;
  let fixture: ComponentFixture<TableItemUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
