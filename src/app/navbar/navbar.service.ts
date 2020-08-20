import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CharacterClass } from '../models/CharacterClass';
import { HttpClient } from '@angular/common/http';
import { ISpell } from '../models/ISpells';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }

  getCharacterClasses(): Observable<CharacterClass[]> {
    const url = 'api/characterClasses';

    const results = this.http.get<CharacterClass[]>(url);

    return results;
  }
}
