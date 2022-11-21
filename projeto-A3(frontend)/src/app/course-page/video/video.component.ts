import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseType, Lessons, ModuleType } from 'src/Types/Course';
import { CommunicationService } from 'src/Services/communication.sevices';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    private courseKey: string = '';
    private lessonKey: string = '';
    private modulesKey: string = '';
    course = {} as CourseType;
    modules = [] as Array<ModuleType>
    lesson = {} as Lessons;

  constructor(
    private route: ActivatedRoute,
    private commService: CommunicationService,
    private router: Router) {
    }
    
    getCurrentModules(courseKey: string, moduleKey: string) {
      this.commService.requestModules(courseKey).subscribe( 
        (data: Array<ModuleType>) =>{
          this.modules = data
          this.lesson = this.mapLesson(data, moduleKey)
        }
      )
    }

    getCurrentCourse(courseKey: string ) : void {
      this.commService.requestCourse(courseKey).subscribe( 
        (data : CourseType) =>{
          this.course = data
        }
      )
    }

    mapLesson(modules: Array<ModuleType>, moduleKey: string): Lessons {
      let filteredModule: ModuleType = modules.filter((module) => module.moduleId === moduleKey)[0];
      return filteredModule.lessons.filter((lesson) => lesson.lessonKey == this.lessonKey)[0]
    }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.queryParams.subscribe(
      (params) => {
        this.courseKey = params['courseId']
        this.lessonKey = params['lessonId']
        this.modulesKey = params['moduleId']
      }
      );
      this.getCurrentCourse(this.courseKey)
      this.getCurrentModules(this.courseKey, this.modulesKey)
    }

}
