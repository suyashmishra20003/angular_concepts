import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy {
  selectedCourse: Course
  courseId: number
  paramMapObj:any

  constructor(
    private _courseService: CourseService,
    private activeRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    // this.courseId = this.activeRoute.snapshot.params['id']  //* Old way of accessing parameters
    // this.courseId = Number(this.activeRoute.snapshot.paramMap.get('id')) //! This only runs once it does not give the updated value of params
    
    //? params approach
    // this.activeRoute.params.subscribe((data)=>{
    //   this.courseId = +data['id']; //* Notice the + sign, which converts the string value to a number.
    //   this.selectedCourse = this._courseService.courses.find(
    //     (course) => {
    //       return course.id === this.courseId
    //     }
    //   )
    // })

    //? paramMap approach
    this.paramMapObj =  this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = Number( data.get('id'))
      this.selectedCourse = this._courseService.courses.find((course)=>{
        return course.id === this.courseId
      })
    })
   
  }


  ngOnDestroy(): void {
    this.paramMapObj.unsubscribe()
  }
}
