import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterClassesService } from './character-classes.service';

describe('CharacterClassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CharacterClassesService]
  }));

  it('should be created', () => {
    const service: CharacterClassesService = TestBed.inject(CharacterClassesService);
    expect(service).toBeTruthy();
  });
});
