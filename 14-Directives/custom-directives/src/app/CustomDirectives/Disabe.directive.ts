import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[CustomDisable]'
})

export class DisableDirective implements  OnInit,OnChanges{
    @Input() disableProperty: boolean = true;
    @HostBinding('disabled') isDiasbled:boolean = true
    constructor(
        private element:ElementRef,
        private renderer:Renderer2
    ){
    }
    ngOnChanges(changes: SimpleChanges): void {
        // this.isDiasbled = this.disableProperty
    }




    ngOnInit(): void {
        this.element.nativeElement.style.padding = '18px'
    }


}