import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector:'[appClass]'
})

export class CustomClassDirective implements OnInit, OnChanges{
    @Input() display:any

    constructor(
        private element:ElementRef,
        private renderer:Renderer2
    ){}
    ngOnChanges(changes: SimpleChanges): void {
        // const  arr = Object.entries(this.display)
        // arr.map((item)=>{
        //     console.log(item,item[0],item[1])
        // })
        console.log()
        for (const key in this.display) {
            if (Object.prototype.hasOwnProperty.call(this.display, key)) {
                const value = this.display[key];
                if(value){
                    this.renderer.addClass(this.element.nativeElement, key)
                }
                
            }
        }
    }


    ngOnInit(){
       
    }
}