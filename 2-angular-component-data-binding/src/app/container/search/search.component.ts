import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent {
  @ViewChild('inputBox') inputBox:ElementRef | undefined
  searchText: string = ''
  @Output() strVal :EventEmitter<string> = new EventEmitter<string>()


  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  searchHandler(){
    this.strVal.emit(this.searchText)
  }

  searchClickHandler(){
   let val = this.inputBox?.nativeElement.value
   console.log(val);
   
  }
}
