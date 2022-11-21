import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Location } from "@angular/common"
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  constructor(private route: Location) {
   }

  ngOnInit(): void {
  }

}
