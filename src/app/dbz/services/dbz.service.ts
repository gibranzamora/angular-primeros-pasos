import { Injectable } from '@angular/core';
import { Character } from '../interfaces/caracter.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]  = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(caracter: Character):void {
    /** Indicamos que agregue la variable id y ademas integre sus demás variables que contiene */
    const newCharacter: Character = { id: uuid(), ...caracter};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:any):void{
  //   this.characters.splice(index,1)
  // }
  onDeleteCharacterById(id:any):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
