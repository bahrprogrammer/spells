import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassEditComponent } from './character-class-edit.component';

describe('CharacterClassEditComponent', () => {
  let component: CharacterClassEditComponent;
  let fixture: ComponentFixture<CharacterClassEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterClassEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
