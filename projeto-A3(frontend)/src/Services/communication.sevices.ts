import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CourseType, Lessons, ModuleType } from 'src/Types/Course';
import { UserType } from 'src/Types/User';

@Injectable()
export class CommunicationService {
  constructor(private http: HttpClient) { }
  
  requestCourses(): Observable<Array<CourseType>> {
    return this.http.get<Array<CourseType>>('http://localhost:8080/courses')
  }

  requestCourse( courseId: string ): Observable<CourseType> {
    return this.http.get<CourseType>(`http://localhost:8080/course/${courseId}`)
  }

  requestModules(courseId: string): Observable<Array<ModuleType>> {
    return this.http.get<Array<ModuleType>>(`assets/modules.json?courserId=${courseId}`)
  }

  requestUser(id: string): Observable<UserType> {
    return this.http.get<UserType>(`http://localhost:8080/user/${id}`)
  }

  login(crm: string) {
    return this.http.post('http://localhost:8080/login', {"crm": crm}, {observe: "response"})
  }

  register(user:UserType) {
    return this.http.post(`http://localhost:8080/user`, user)
  }
}