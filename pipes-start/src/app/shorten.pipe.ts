import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform{
  transform(value: any, limit: number): string {
    // if(value.length > limit) {
    //   return value.substring(0,limit) + '...';
    // }else{
    //   return value;
    // }
    return (value.length > 10) ? value.substring(0,10) + '...' : value;
  }
}

//
