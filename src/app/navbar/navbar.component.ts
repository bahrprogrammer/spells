import { Component, OnInit } from '@angular/core';
import { CharacterClass } from '../models/CharacterClass';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  characterClasses: CharacterClass[] = [];

  constructor(private service: NavbarService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.service.getCharacterClasses().subscribe({
      next: (data) => (this.characterClasses = data)
    });
  }

  search(): void {
    // search code here
  }
}
