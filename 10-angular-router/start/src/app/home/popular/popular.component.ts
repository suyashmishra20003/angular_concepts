import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];

  constructor(
    private _router: Router,
    private activeRoute: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses() {
    // this._router.navigate(['Courses','Suyash','Shikhar']) //* Output =  http://localhost:4200/Courses/Suyash/Shikhar
    // this._router.navigate(['Courses'], { relativeTo: this.activeRoute }) //* Relative Path
    this._router.navigate(['Courses']) //* Absolute Path
    // this._router.navigateByUrl('/Courses') //todo  Cannot use relative paths with navigateByUrl
  }
}
