import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective } from './SetBackground.directive';
import { ColorWhiteDirective } from './ColorWhite.directive';
import { PillButtonDirective } from './PillButton.directive';
import { DisableDirective } from './Disabe.directive';
import { CustomClassDirective } from './custom-class.directive';
import { CustomStyleDirective } from './custom-style.directive';
import { customIfDirective } from './custom-if.directive';



@NgModule({
  declarations: [
    SetBackgroundDirective,
    ColorWhiteDirective,
    PillButtonDirective,
    DisableDirective,
    CustomClassDirective,
    CustomStyleDirective,
    customIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SetBackgroundDirective,
    ColorWhiteDirective,
    PillButtonDirective,
    DisableDirective,
    CustomClassDirective,
    CustomStyleDirective,
    customIfDirective
  ]
})
export class CustomDirectiveModule { }
