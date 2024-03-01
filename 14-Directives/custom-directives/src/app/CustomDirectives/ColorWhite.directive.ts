import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[ColorWhite]'
})
export class ColorWhiteDirective{
    constructor(element:ElementRef){
        element.nativeElement.style.color = 'white';
    }
}