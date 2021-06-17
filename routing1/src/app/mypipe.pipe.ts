import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    const nameArray = value.split(" ");
    let i, shortName='';
    if(nameArray.length>1){
      for(i=0;i<nameArray.length-1;i++){
        shortName = shortName+ nameArray[i].charAt(0)+". ";
      }
      return shortName+nameArray[i];
    } else {
      return value;
    }
  }

}
