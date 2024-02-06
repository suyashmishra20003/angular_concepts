import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'customPercentPipe'
})

export class PercentagePipe implements PipeTransform{
    transform(value: number, total:number, decimal:number = 0) {

        return ((value/ total) * 100).toFixed(decimal) + '%'
    }

}