import { Pipe, PipeTransform } from "@angular/core";
import {Student} from '../Models/Student'
@Pipe({
    name:'customFilterPipe',
    pure: false //* Makes the pipe run everytime the value changes (makes Impure pipe)
})

export class FilterPipe implements PipeTransform {
    transform(value: Student[], filterBy:string) {
        if (filterBy.toLowerCase() === 'all' || filterBy === '' || value.length === 0) {
            return value
        }else{
            return value.filter((item)=>{
                return item.gender.toLowerCase() === filterBy.toLowerCase()
            })
        }
    }

}