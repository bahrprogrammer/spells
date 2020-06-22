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
}
