import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settinggender'
})
export class SettinggenderPipe implements PipeTransform {

  transform(value: string): string{
    if(value == 'false')
    return "Female";
    else return 'male';
  }

}
