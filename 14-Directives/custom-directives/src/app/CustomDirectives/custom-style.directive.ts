import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector:'[appStyle]'
})

export class CustomStyleDirective implements OnInit, OnChanges{
    active:boolean = true;
    @Input() elementStyle:any
    constructor(
        private element:ElementRef,
        private renderer:Renderer2
    ){}
    ngOnChanges(changes: SimpleChanges): void {

    }
    ngOnInit(): void {
        const styles = Object.entries(this.elementStyle);

        styles.map((item)=>{
            this.renderer.setStyle(this.element.nativeElement , item[0], item[1])
        })
        console.log(styles);
         
    }


}
