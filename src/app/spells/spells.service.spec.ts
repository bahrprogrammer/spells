import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpellsService } from './spells.service';

describe('SpellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SpellsService]
  }));

  it('should be created', () => {
    const service: SpellsService = TestBed.inject(SpellsService);
    expect(service).toBeTruthy();
  });
});
