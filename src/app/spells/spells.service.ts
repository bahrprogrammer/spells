import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ISpell } from '../models/ISpells';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http: HttpClient) { }

  getSpells(): Observable<ISpell[]> {
    const url = 'api/spells';
    return this.http.get<ISpell[]>(url);
  }
}
