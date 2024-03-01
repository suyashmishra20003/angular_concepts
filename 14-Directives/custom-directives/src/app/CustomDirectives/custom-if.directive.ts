import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[CustomIf]'
})

export class customIfDirective  {
    @Input('CustomIf') set display(condition:boolean){
        if (condition) {
            this.template.createEmbeddedView(this.view)
        } else {
            this.template.clear()   
        }
    }
    //*  Custom structural directive
    constructor(
        //*  Custom structural directive
        private view:TemplateRef<any>,
        private template:ViewContainerRef
    ){}
   
    

}