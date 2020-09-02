import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: User[], searchName?: string): User[] {
    
    searchName = searchName?searchName.toLocaleLowerCase():null  

    return searchName?value.filter((u:User)=>u.firstName.toLocaleLowerCase().indexOf(searchName)!==-1):value;
   }

}
