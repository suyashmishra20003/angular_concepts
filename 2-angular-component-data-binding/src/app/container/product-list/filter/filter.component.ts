import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  selectedFilterRadioBtn: any = 'all'
  @Output() selectedFilterRadioBtnChanged: EventEmitter<string> = new EventEmitter<string>() 

  
  ngOnInit(): void {
    console.log(this.selectedFilterRadioBtn);
  }

  radioChangeHandler(event: any) {
    console.log('selectedFilterRadioBtnChanged event raised from child');
    
    this.selectedFilterRadioBtnChanged.emit(this.selectedFilterRadioBtn)
  }
}
