import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent {
  searchText: string = ''
  @Output() strVal :EventEmitter<string> = new EventEmitter<string>()


  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  searchHandler(){
    this.strVal.emit(this.searchText)
  }
}
