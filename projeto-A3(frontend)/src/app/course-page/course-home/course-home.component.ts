import { Component, OnInit } from '@angular/core';
import { CourseType, ModuleType } from 'src/Types/Course';
import {Location} from "@angular/common"
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommunicationService } from 'src/Services/communication.sevices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {
  courseKey: string = '';
  course = {} as CourseType;
  modules: Array<ModuleType> = [];

  constructor(
      private commService: CommunicationService,
      private route: ActivatedRoute) {
    //this.course = this.location.getState() as CourseType
   }
   getCurrentModules( courseKey: string ) : void {
    this.commService.requestCourse(this.courseKey).subscribe( 
      (data : CourseType) =>{
        console.log(data)
        this.course = data
      }
    )
  }
   getCurrentCourse(courseKey: string) {
    this.commService.requestModules(courseKey).subscribe( 
      (data: Array<ModuleType>) =>{
        console.log(data)
        this.modules = data
      }
    )
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => this.courseKey = params['courseId']
      );
      console.log(this.courseKey)
    this.getCurrentCourse(this.courseKey)
    this.getCurrentModules(this.courseKey)
    }
}
