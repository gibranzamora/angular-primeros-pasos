import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../../interfaces/caracter.interfaces";


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   // TODO: Emitir el ID del personaje
  //   // console.log(index);
  //   this.onDelete.emit(index);
  // }
  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje
    if(!id) return;
    this.onDelete.emit(id);
  }
  //
}
