import { Component, ViewChild, ElementRef, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild('para') paraEl: ElementRef;
  // @ContentChild('paragraph') paragraph: ElementRef; //* for @ContentChild
  @ContentChildren('paragraph') paragraphs: ElementRef; //* for @ContentChildren

  @ContentChildren(TestComponent) testComps:QueryList<TestComponent> //* for getting childrens
  
  showParaValue(){
    console.log(this.paraEl);
    console.log("---------------")
    // console.log(this.paragraph);
    console.log(this.paragraphs);
    console.log("---------------")
    console.log(this.testComps['_results']);
    
  }
}
