import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 500
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    }, {
      id: uuid(),
      name: "Veggeta",
      power: 7500
    }

  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }
    //console.log(newCharacter);
    this.characters.push(newCharacter);
    // console.log(this.characters);
    //this.characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
    //this.characters.splice(index, 1);
  }
}
