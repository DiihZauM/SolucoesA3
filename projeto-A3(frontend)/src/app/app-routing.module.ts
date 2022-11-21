import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './course-page/video/video.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseHomeComponent } from './course-page/course-home/course-home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'curso', component: CoursePageComponent , children: [
    {path: '', component: CourseHomeComponent,pathMatch: 'full'},
    {path: 'aula', component: VideoComponent,pathMatch: 'full'}
  ]},
  { path: 'cadastro', component: RegisterComponent},
  { path: 'perfil', component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
