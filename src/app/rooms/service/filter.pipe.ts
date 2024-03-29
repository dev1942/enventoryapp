import { Pipe, PipeTransform } from '@angular/core';
import { RoomsList } from '../room';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms:RoomsList[],price:number): RoomsList[] {
    return rooms.filter(room=>room.price >price);
  }

}
