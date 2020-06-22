import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassesComponent } from './character-classes.component';

describe('CharacterClassesComponent', () => {
  let component: CharacterClassesComponent;
  let fixture: ComponentFixture<CharacterClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
