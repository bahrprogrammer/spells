import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterClass } from '../models/CharacterClass';
import { HttpClient } from '@angular/common/http';
import { ISpell } from '../models/ISpells';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassesService {

  constructor(private http: HttpClient) { }

  getCharacterClasses(): Observable<CharacterClass[]> {
    const url = 'api/characterClasses';
    return this.http.get<CharacterClass[]>(url);
  }

  getCharacterClassById(id: string): Observable<CharacterClass> {
    const url = `api/characterClasses/${id}`;
    return this.http.get<CharacterClass>(url);
  }

  getAllSpells(): Observable<ISpell[]> {
    const url = 'api/spells';
    return this.http.get<ISpell[]>(url);
  }
}
