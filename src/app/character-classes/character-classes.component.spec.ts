import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterClassesService } from './character-classes.service';
import { CharacterClassesComponent } from './character-classes.component';

describe('CharacterClassesComponent', () => {
  let component: CharacterClassesComponent;
  let fixture: ComponentFixture<CharacterClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CharacterClassesComponent ],
      providers: [ CharacterClassesService ]
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
