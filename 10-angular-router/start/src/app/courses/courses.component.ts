import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Course } from "../Models/course";
import { CourseService } from "../Services/course.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit, OnDestroy {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string;
  querySubscriber: any;

  constructor(
    activeRoute:ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.searchString = this.activeRoute.snapshot.queryParams['search'] //*  Using queryParams
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search')
    this.querySubscriber = this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get("search");
      if (
        this.searchString === undefined ||
        this.searchString === "" ||
        this.searchString === null
      ) {
        // this.coursesService.getAllcourses().subscribe((data:Course[]) => {
        //   this.AllCourses = data;
        // });
        
        //? Using Resolve Routegard
        this.AllCourses = this.activeRoute.snapshot.data["courses"];

      } else {
        this.AllCourses = this.coursesService.courses.filter((course) => {
          return course.title
            .toLowerCase()
            .includes(this.searchString.toLowerCase());
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.querySubscriber.unsubscribe();
  }
}
