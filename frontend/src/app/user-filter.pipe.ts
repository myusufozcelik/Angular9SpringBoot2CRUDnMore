import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: User[], searchGender?: string): User[] {
  
    return searchGender?value.filter((u:User)=>u.gender.indexOf(searchGender)!==-1):value;
   }

}
