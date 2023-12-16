import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  searchValue: string
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  navigateToFilteredCourse() {
    let str = `/Courses?search=${this.searchValue}`
    // this.router.navigateByUrl(str)  //*  Using navigateByUrl
    this.router.navigate(['/Courses'], { queryParams: { search: this.searchValue } }) //*  Using navigate
  }
}
