import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[PillButton]'
})
export class PillButtonDirective implements OnInit {
    constructor(
        private element: ElementRef, 
        private renderer: Renderer2
    ) {}

    
    @HostBinding('title') title:string = 'Button of Custom Directives'


    @HostListener('mouseenter') enter() {
        let elem = this.element.nativeElement.style
        elem.backgroundColor = '#DAA520';

    }
    @HostListener('mouseout') out() {
        let elem = this.element.nativeElement.style
        elem.backgroundColor = 'black';

    }

    ngOnInit(): void {
        let elem = this.element.nativeElement.style
        elem.backgroundColor = 'black';
        elem.color = 'white';
        elem.fontWeight = 'bold';
        elem.padding = '8px 16px 8px 16px';
        elem.borderRadius = '16px';
        elem.cursor = 'pointer';
        elem.textAlign = 'center';
        elem.border = 'none'

        /*
        *    Using Renderer2
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'Click Me !!!!!!!!!!')
        */
    }
}