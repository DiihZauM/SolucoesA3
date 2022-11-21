import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { of, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { CommunicationService } from 'src/Services/communication.sevices';
import { CourseType } from 'src/Types/Course';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public coursesList: Observable<CourseType[]>;
  
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 4, all: 0 },
    speed: 300,
    point: {
      visible: true
    },
    touch: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };

  constructor(private commService: CommunicationService) {
    this.coursesList = this.commService.requestCourses().pipe(
      startWith([]),
      map((data) => {return data;})
    );
   }

  ngOnInit(){
  }

}
