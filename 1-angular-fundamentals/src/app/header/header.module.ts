import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";

const imports = [
    CommonModule
]

@NgModule({
    declarations:[HeaderComponent],
    imports:[imports],
    exports:[HeaderComponent]
})

export class HeaderModule {}