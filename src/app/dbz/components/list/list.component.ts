import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // en el caso de un obtener un valor vacio, se toma el objeto por omision.
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  // onDelete = Index value : number;

  //@Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  /*
  onDeleteCharacter(index: number): void {
     // TODO: emitir el ID del personaje
    console.log({index});
    this.onDelete.emit(index);
  }

  */

  onDeleteCharacter(id?: string): void {
    if( !id ) return;
    this.onDelete.emit(id);
  }

}
