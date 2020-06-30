import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterClass } from '../models/CharacterClass';
import { HttpClient } from '@angular/common/http';

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
    const characterClass = this.http.get<CharacterClass>(url);
    console.log(characterClass);
    return this.http.get<CharacterClass>(url);
  }
}
