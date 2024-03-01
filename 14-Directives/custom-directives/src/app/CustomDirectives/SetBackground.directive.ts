import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective implements OnInit{
    // @Input() backColor:string = '';
    // @Input() textColor:string = 'white';

    @Input('setBackground') 
    changeTextAndBackColor:{backColor:string, textColor:string } = {
        backColor:'',
        textColor:'black'
    }
    constructor(private element:ElementRef) { 
    }
    ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = this.changeTextAndBackColor.backColor;        
        this.element.nativeElement.style.color = this.changeTextAndBackColor.textColor;        
    }


}