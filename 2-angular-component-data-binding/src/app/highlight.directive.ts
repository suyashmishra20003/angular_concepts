import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'highlight'
})

export class HighLightDirective {
    constructor(private elRef : ElementRef){}

    @HostListener('click') onClick(){
        console.log('Suyash is in a directive')
        this.elRef.nativeElement.style.backgroundColor = 'yellow'
    }
}